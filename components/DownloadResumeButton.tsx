import Link from 'next/link';
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { File } from 'lucide-react';


function DownloadResumeButton() {
  return (
    <div className="relative group">
    
              <AlertDialog>
  <AlertDialogTrigger>

       
       <button
         className="relative inline-flex items-center justify-center sm:w-[40px] sm:h-[40px] w-[35px] h-[35px] bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg transform scale-100 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
       >
      <File />
       </button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>This Will Redirect you to the Resume</AlertDialogTitle>
      <AlertDialogDescription>
        See or download my Resume
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>

      <Link href={"https://drive.google.com/file/d/10dH1V4j_htYklg4WAxIvn5C86esWoBAb/view?usp=sharing"}
      
      target='_blank'>
      <AlertDialogAction>Get Resume</AlertDialogAction>
      </Link>

    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

      <div className="absolute bottom z-[99999] mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-black px-2 py-1 rounded">
        Resume
      </div>
    </div>
  );
}

export default DownloadResumeButton;
