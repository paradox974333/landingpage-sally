"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "./AnimatedBeam";
import SallyCircle from "./SallyCircle";
import { cn } from "@/lib/utils";

// Lucide Icons (proper + meaningful)
import {
  Network,       // API Gateway
  ShieldCheck,   // Auth
  Database,      // DB
  BrainCircuit,  // LLM / Model Engine
  Bot,           // Central Sally
  Activity,      // Logs / Monitoring
  LineChart,     // Trader / Strategy
} from "lucide-react";

export default function SallyMCPSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const apiRef = useRef<HTMLDivElement>(null);
  const dbRef = useRef<HTMLDivElement>(null);
  const llmRef = useRef<HTMLDivElement>(null);
  const sallyRef = useRef<HTMLDivElement>(null); 
  const authRef = useRef<HTMLDivElement>(null);
  const logsRef = useRef<HTMLDivElement>(null);
  const traderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-black py-24 px-4">
      <h2 className="text-center text-4xl font-bold text-white mb-16">
        Sally MCP System Flow
      </h2>

      <div
        ref={containerRef}
        className={cn(
          "relative flex h-[350px] w-full items-center justify-center overflow-hidden p-10"
        )}
      >
        <div className="flex size-full max-h-[240px] max-w-lg flex-col items-stretch justify-between gap-10">

          {/* ROW 1 */}
          <div className="flex flex-row items-center justify-between">
            <SallyCircle ref={apiRef} className="text-white bg-black border-white">
              <Network size={22} color="white" />
            </SallyCircle>

            <SallyCircle ref={authRef} className="text-white bg-black border-white">
              <ShieldCheck size={22} color="white" />
            </SallyCircle>
          </div>

          {/* ROW 2 */}
          <div className="flex flex-row items-center justify-between">
            <SallyCircle ref={dbRef} className="text-white bg-black border-white">
              <Database size={22} color="white" />
            </SallyCircle>

            {/* CENTER SALLY */}
            <SallyCircle ref={sallyRef} className="size-16 text-white bg-black border-white">
              <Bot size={28} color="white" />
            </SallyCircle>

            <SallyCircle ref={logsRef} className="text-white bg-black border-white">
              <Activity size={22} color="white" />
            </SallyCircle>
          </div>

          {/* ROW 3 */}
          <div className="flex flex-row items-center justify-between">
            <SallyCircle ref={llmRef} className="text-white bg-black border-white">
              <BrainCircuit size={22} color="white" />
            </SallyCircle>

            <SallyCircle ref={traderRef} className="text-white bg-black border-white">
              <LineChart size={22} color="white" />
            </SallyCircle>
          </div>
        </div>

        {/* BEAMS */}
        <AnimatedBeam containerRef={containerRef} fromRef={apiRef} toRef={sallyRef} curvature={-75} endYOffset={-10} />

        <AnimatedBeam containerRef={containerRef} fromRef={dbRef} toRef={sallyRef} />

        <AnimatedBeam containerRef={containerRef} fromRef={llmRef} toRef={sallyRef} curvature={75} endYOffset={10} />

        <AnimatedBeam containerRef={containerRef} fromRef={authRef} toRef={sallyRef} curvature={-75} endYOffset={-10} reverse />

        <AnimatedBeam containerRef={containerRef} fromRef={logsRef} toRef={sallyRef} reverse />

        <AnimatedBeam containerRef={containerRef} fromRef={traderRef} toRef={sallyRef} curvature={75} endYOffset={10} reverse />
      </div>
    </section>
  );
}
