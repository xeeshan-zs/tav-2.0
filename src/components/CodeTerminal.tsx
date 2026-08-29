import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeSnippets = [
  {
    filename: "app/api/route.ts",
    lines: [
      { indent: 0, text: "import { NextResponse } from 'next/server';" },
      { indent: 0, text: "" },
      { indent: 0, text: "export async function POST(req: Request) {" },
      { indent: 1, text: "const { prompt } = await req.json();" },
      { indent: 1, text: "const result = await generateCode(prompt);" },
      { indent: 1, text: "return NextResponse.json(result);" },
      { indent: 0, text: "}" },
    ],
  },
  {
    filename: "lib/engine.ts",
    lines: [
      { indent: 0, text: "export class Engine {" },
      { indent: 1, text: "private cache: Map<string, Data>;" },
      { indent: 0, text: "" },
      { indent: 1, text: "async deploy(config: Config) {" },
      { indent: 2, text: "const preview = await this.build(config);" },
      { indent: 2, text: "this.cache.set(config.id, preview);" },
      { indent: 2, text: "return { url: preview.url };" },
      { indent: 1, text: "}" },
      { indent: 0, text: "}" },
    ],
  },
  {
    filename: "components/App.tsx",
    lines: [
      { indent: 0, text: "'use client';" },
      { indent: 0, text: "" },
      { indent: 0, text: "export default function App() {" },
      { indent: 1, text: "const [data, setData] = useState(null);" },
      { indent: 0, text: "" },
      { indent: 1, text: "useEffect(() => {" },
      { indent: 2, text: "fetch('/api/data')" },
      { indent: 2, text: ".then(res => res.json())" },
      { indent: 2, text: ".then(setData);" },
      { indent: 1, text: "}, []);" },
      { indent: 0, text: "" },
      { indent: 1, text: "return <Dashboard data={data} />;" },
      { indent: 0, text: "}" },
    ],
  },
  {
    filename: "lib/ai/pipeline.ts",
    lines: [
      { indent: 0, text: "import { OpenAI } from 'openai';" },
      { indent: 0, text: "" },
      { indent: 0, text: "const client = new OpenAI({ apiKey: process.env.KEY });" },
      { indent: 0, text: "" },
      { indent: 0, text: "export async function analyze(data: string[]) {" },
      { indent: 1, text: "const res = await client.chat.completions.create({" },
      { indent: 2, text: "model: 'gpt-4'," },
      { indent: 2, text: "messages: [{ role: 'user', content: data }]," },
      { indent: 1, text: "});" },
      { indent: 1, text: "return res.choices[0].message.content;" },
      { indent: 0, text: "}" },
    ],
  },
  {
    filename: "middleware.ts",
    lines: [
      { indent: 0, text: "import { NextResponse } from 'next/server';" },
      { indent: 0, text: "" },
      { indent: 0, text: "export function middleware(req) {" },
      { indent: 1, text: "const token = req.cookies.get('auth');" },
      { indent: 0, text: "" },
      { indent: 1, text: "if (!token) {" },
      { indent: 2, text: "return NextResponse.redirect('/login');" },
      { indent: 1, text: "}" },
      { indent: 0, text: "" },
      { indent: 1, text: "return NextResponse.next();" },
      { indent: 0, text: "}" },
    ],
  },
  {
    filename: "prisma/schema.prisma",
    lines: [
      { indent: 0, text: "model User {" },
      { indent: 1, text: "id        String   @id @default(cuid())" },
      { indent: 1, text: "email     String   @unique" },
      { indent: 1, text: "name      String?" },
      { indent: 1, text: "role      Role     @default(USER)" },
      { indent: 1, text: "projects  Project[]" },
      { indent: 0, text: "}" },
      { indent: 0, text: "" },
      { indent: 0, text: "enum Role { USER  ADMIN  }" },
    ],
  },
  {
    filename: "app/page.tsx",
    lines: [
      { indent: 0, text: "import { Suspense } from 'react';" },
      { indent: 0, text: "import { Hero } from '@/components/Hero';" },
      { indent: 0, text: "import { Features } from '@/components/Features';" },
      { indent: 0, text: "" },
      { indent: 0, text: "export default function Home() {" },
      { indent: 1, text: "return (" },
      { indent: 2, text: "<main className='min-h-screen'>" },
      { indent: 3, text: "<Hero />" },
      { indent: 3, text: "<Suspense fallback={<Loader />}>" },
      { indent: 4, text: "<Features />" },
      { indent: 3, text: "</Suspense>" },
      { indent: 2, text: "</main>" },
      { indent: 1, text: ");" },
      { indent: 0, text: "}" },
    ],
  },
  {
    filename: "lib/db/queries.ts",
    lines: [
      { indent: 0, text: "import { prisma } from './client';" },
      { indent: 0, text: "" },
      { indent: 0, text: "export async function getUser(id: string) {" },
      { indent: 1, text: "return prisma.user.findUnique({" },
      { indent: 2, text: "where: { id }," },
      { indent: 2, text: "include: { projects: true }," },
      { indent: 1, text: "});" },
      { indent: 0, text: "}" },
    ],
  },
];

const keywords = ["import", "from", "export", "async", "function", "return", "const", "await", "class", "private", "default", "new", "null", "true", "false", "if", "else"];
const types = ["NextResponse", "Request", "Response", "Map", "Config", "Data", "string", "number", "void", "useState", "useEffect", "Suspense", "String", "Role", "User", "Project"];

function highlightLine(text: string) {
  if (!text) return null;

  let parts: { text: string; color: string }[] = [{ text, color: "" }];

  const stringRegex = /'[^']*'|"[^"]*"/g;
  const newParts: typeof parts = [];
  for (const part of parts) {
    let lastIndex = 0;
    let match;
    stringRegex.lastIndex = 0;
    while ((match = stringRegex.exec(part.text)) !== null) {
      if (match.index > lastIndex) {
        newParts.push({ text: part.text.slice(lastIndex, match.index), color: "" });
      }
      newParts.push({ text: match[0], color: "text-emerald-400" });
      lastIndex = stringRegex.lastIndex;
    }
    if (lastIndex < part.text.length) {
      newParts.push({ text: part.text.slice(lastIndex), color: "" });
    }
  }
  parts = newParts.length > 0 ? newParts : parts;

  const finalParts: typeof parts = [];
  for (const part of parts) {
    if (part.color) {
      finalParts.push(part);
      continue;
    }
    let remaining = part.text;
    const regex = /\b([a-zA-Z_]\w*)\b/g;
    let lastIdx = 0;
    let m;
    regex.lastIndex = 0;
    while ((m = regex.exec(remaining)) !== null) {
      if (m.index > lastIdx) {
        finalParts.push({ text: remaining.slice(lastIdx, m.index), color: "" });
      }
      const word = m[1];
      if (keywords.includes(word)) {
        finalParts.push({ text: word, color: "text-purple-400" });
      } else if (types.includes(word)) {
        finalParts.push({ text: word, color: "text-sky-400" });
      } else {
        finalParts.push({ text: word, color: "" });
      }
      lastIdx = regex.lastIndex;
    }
    if (lastIdx < remaining.length) {
      finalParts.push({ text: remaining.slice(lastIdx), color: "" });
    }
  }

  return finalParts.map((p, i) =>
    p.color ? (
      <span key={i} className={p.color}>
        {p.text}
      </span>
    ) : (
      <span key={i}>{p.text}</span>
    )
  );
}

export function CodeTerminal() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const snippet = codeSnippets[snippetIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setVisibleLines(0);
    const totalLines = snippet.lines.length;

    const lineTimers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < totalLines; i++) {
      lineTimers.push(
        setTimeout(
          () => setVisibleLines(i + 1),
          i === 0 ? 400 : 400 + i * 350
        )
      );
    }

    const nextSnippet = setTimeout(
      () => {
        setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
      },
      400 + totalLines * 350 + 2000
    );

    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(nextSnippet);
    };
  }, [snippetIndex, snippet.lines.length]);

  return (
    <div className="relative z-10 mx-auto w-full max-w-md overflow-hidden rounded-2xl border dark:border-white/[0.08] border-black/[0.08] dark:bg-[#0d1117]/90 bg-white/90 backdrop-blur-sm shadow-2xl">
      <div className="flex items-center gap-2 border-b dark:border-white/[0.06] border-black/[0.06] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={snippetIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="ml-2 font-mono text-[10px] dark:text-slate-500 text-slate-400"
          >
            {snippet.filename}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="p-4 font-mono text-[11px] leading-[1.7] dark:text-slate-300 text-slate-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={snippetIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {snippet.lines.map((line, i) => (
              <motion.div
                key={`${snippetIndex}-${i}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{
                  opacity: i < visibleLines ? 1 : 0,
                  x: i < visibleLines ? 0 : -8,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex"
              >
                <span className="mr-4 inline-block w-4 text-right dark:text-slate-600 text-slate-300 select-none">
                  {i + 1}
                </span>
                <span style={{ marginLeft: `${line.indent * 1.5}em` }}>
                  {highlightLine(line.text)}
                </span>
              </motion.div>
            ))}
            <div className="flex">
              <span className="mr-4 inline-block w-4" />
              <span
                className={`inline-block h-4 w-2 bg-accent-teal/70 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transition: "opacity 0.1s" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
