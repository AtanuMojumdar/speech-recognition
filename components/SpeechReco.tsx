"use client"

import 'regenerator-runtime/runtime';
import { ScrollArea } from "@/components/ui/scroll-area"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
    Copy,
} from "lucide-react"



const SpeechReco = () => {
    const trans = document.getElementById('trans');
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startListen = () => {
        SpeechRecognition.startListening({ continuous: true });
        toast("Listening...", {
            description: "Speak Now",
            action: {
              label: "Stop",
              onClick: () => stopListen(),
            },
          })
    }

    const stopListen = ()=>{
        SpeechRecognition.stopListening()
        toast("Listening Stopped!")
    }
    const reset = () => {
        let text = trans?.textContent as String
        if(text === ''){
            return
        }
        resetTranscript()
    }

    const copyClip = () => {
        let text: string = trans?.textContent as string;
        if(text === ''){
            return
        }
        navigator.clipboard.writeText(text)
        toast("Transcript Copied")
    }

    

    if (!browserSupportsSpeechRecognition) {
        console.log("Your Browser Supports Speech Recognition? Result:" + SpeechRecognition.browserSupportsSpeechRecognition())
        return (
        <>
        <div className='text-center mt-8'>
        <span className='underline underline-offset-2'>Speech Recognition
        Doesn&apos;t Support in this browser.</span>
        <p className='mt-2'>Try Using Different Browser!</p>
        </div>
        </>);
    }

    
    

    return (
        <>
            <div>
                <div
                    className='text-center relative top-14'>Microphone is <span className='underline underline-offset-2'>{listening ? 'on' : 'off'}</span></div>

                <div className='mt-20 md:w-[75%] mx-auto md:0 p-2'>
                    <ScrollArea className='md:w-[70%] w-[90%] p-2 rounded-lg relative shadow-lg h-[17rem] dark:bg-slate-800 mx-auto'>
                        <p id='trans'>{transcript}</p>
                        <span className='absolute top-2 right-2 hover:cursor-pointer'>
                            <Copy className='h-4 w-4' onClick={copyClip}/>
                        </span>

                    </ScrollArea>


                    <div className='w-fit ml-auto md:px-40 mt-3 flex gap-2'>
                        <Button onClick={startListen}>Speak</Button>
                        <Button onClick={stopListen}>Stop</Button>
                        <Button onClick={reset} variant="destructive">Clear</Button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default SpeechReco