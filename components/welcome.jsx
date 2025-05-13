/* eslint-disable */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

export default function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Video className="w-16 h-16 mx-auto mb-4 text-white" />
        <h1 className="text-4xl font-bold mb-2">Welcome to VisionTalk</h1>
        <p className="text-lg opacity-80">Seamless video calls, anytime, anywhere.</p>
      </motion.div>

      <div className="mt-6 flex gap-4">
        <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
          Join Call
        </Button>
        <Button className="bg-green-500 hover:bg-green-600">Create Room</Button>
      </div>
    </div>
  );
}
