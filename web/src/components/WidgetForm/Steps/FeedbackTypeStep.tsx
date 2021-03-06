import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged}: FeedbackTypeStepProps) {
  return (
   <>
    <header>
        <span className="text-xl font-medium leading-6 text-light-text_primary dark:text-dark-text_primary">Deixe seu feedback</span>
        <CloseButton />
    </header>
    <div className="flex py-8 gap-2 w-full">
    { Object.entries(feedbackTypes).map(([key, value])=> {
     return (
        <button
         key={key}
         type="button"
         className="bg-light-surface_secondary-300 dark:bg-dark-surface_secondary-300 hover:bg-light-surface_secondary-500 dark:hover:bg-dark-surface_secondary-500 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
         onClick={()=>onFeedbackTypeChanged(key as FeedbackType)}
        >
         <img src={value.image.source} alt={value.image.alt} />
         <span className="text-light-text_primary dark:text-dark-text_primary">{value.title}</span>
        </button>
      )
    })}
    </div>
   </>
  )
}