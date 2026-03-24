import { memo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "../../utils/utils"

const motionElements = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span,
}

// Fixed stagger timings to be constant
const staggerTimings = {
  text: 0.06,
  word: 0.1, // Increased slightly for better visual flow
  character: 0.05,
  line: 0.06,
}

const defaultContainerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const defaultItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
}

const defaultItemAnimationVariants = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.5 } },
      exit: { opacity: 0, transition: { duration: 0.3 } },
    },
  },
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
      exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.3 } },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 60 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
      exit: { opacity: 0, filter: "blur(10px)", y: 60 },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: -60 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: 100, opacity: 0 }, // Increased offset for pronounced bottom-to-top motion
      show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 },
      },
      exit: { y: -100, opacity: 0 },
    },
  },
  slideDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: -100, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 },
      },
      exit: { y: 100, opacity: 0 },
    },
  },
  slideLeft: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 60, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
      exit: { x: -60, opacity: 0 },
    },
  },
  slideRight: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: -60, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
      exit: { x: 60, opacity: 0 },
    },
  },
  scaleUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 0.5, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: { type: "spring", damping: 15, stiffness: 300 } },
      exit: { scale: 0.5, opacity: 0 },
    },
  },
  scaleDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 1.5, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: { type: "spring", damping: 15, stiffness: 300 } },
      exit: { scale: 1.5, opacity: 0 },
    },
  },
}

const TextAnimateBase = ({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  accessible = true,
  ...props
}) => {
  const MotionComponent = motionElements[Component]

  let segments = []
  switch (by) {
    case "word":
      segments = children.split(/(\s+)/)
      break
    case "character":
      segments = children.split("")
      break
    case "line":
      segments = children.split("\n")
      break
    case "text":
    default:
      segments = [children]
      break
  }

  // Use defined staggerTimings instead of math division so long strings don't lose the stagger
  const finalVariants = variants
    ? {
        container: {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              opacity: { duration: 0.01, delay },
              delayChildren: delay,
              staggerChildren: staggerTimings[by],
            },
          },
          exit: {
            opacity: 0,
            transition: {
              staggerChildren: staggerTimings[by],
              staggerDirection: -1,
            },
          },
        },
        item: variants,
      }
    : {
        container: {
          ...defaultItemAnimationVariants[animation].container,
          show: {
            ...defaultItemAnimationVariants[animation].container.show,
            transition: {
              delayChildren: delay,
              staggerChildren: staggerTimings[by],
            },
          },
          exit: {
            ...defaultItemAnimationVariants[animation].container.exit,
            transition: {
              staggerChildren: staggerTimings[by],
              staggerDirection: -1,
            },
          },
        },
        item: defaultItemAnimationVariants[animation].item,
      }

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        viewport={{ once }}
        aria-label={accessible ? children : undefined}
        {...props}
      >
        {accessible && <span className="sr-only">{children}</span>}
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              by === "character" && "",
              segmentClassName
            )}
            aria-hidden={accessible ? true : undefined}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  )
}

export const TextAnimate = memo(TextAnimateBase)