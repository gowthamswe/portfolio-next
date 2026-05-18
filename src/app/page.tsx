import { AiOutlineLinkedin, AiFillGithub, AiOutlineFileText } from 'react-icons/ai';
import './styles.css';
import timeline from './timeline';
import CopyEmailButton from './CopyEmailButton';

const EMAIL = "hello@gowtham.ai";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center relative">
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row relative z-10">
        <aside className="w-full md:w-[30vw] flex flex-col md:sticky md:top-0 md:self-start md:h-screen md:justify-between pt-[100px] pl-4 pb-6">
          <h1 className="text-[#b3b3b3] text-4xl">Gowtham Mallikarjuna</h1>
          <footer className="flex items-center space-x-4 pt-8 md:pb-[100px]">
            <a
              href="https://github.com/gowthamswe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center text-[#b3b3b3] hover:text-white"
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gowtham-swe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center text-[#b3b3b3] hover:text-white"
            >
              <AiOutlineLinkedin size={24} />
            </a>
            <CopyEmailButton email={EMAIL} />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume (PDF)"
              className="flex items-center text-[#b3b3b3] hover:text-white"
            >
              <AiOutlineFileText size={24} />
            </a>
          </footer>
        </aside>
        <main className="w-full md:w-[70vw] flex flex-col pb-10">
          <section className="pt-[100px] pl-4 md:pl-20 pr-4 pb-4">
            <h2 className="sr-only">About</h2>
            <p className="text-[#b3b3b3] text-lg max-w-[70ch]">
              Software Engineer with 9+ years across Meta and Amazon, focused on large-scale distributed systems, platform security, and experimentation-driven product development. Currently leading security and integrity work for Instagram account recovery — designing policies, running A/B experiments, and prototyping LLM-based remediation. Previously delivered full-stack and cloud infrastructure for Amazon Pharmacy and Amazon Fulfillment.
            </p>
          </section>

          <section className="pt-12 pl-5 md:pl-20 pr-4 text-[#b3b3b3]">
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <div className="flex mb-5 card">
              <div className="flex flex-col">
                <span className="font-bold">
                  VideoVitals — Chrome Extension <span className="ml-2">(2026)</span>
                </span>
                <span className="mt-2">
                  Surfaces clickbait flags and information-density ratings on YouTube videos, with community averages. Serverless: Firestore via REST (no SDK), MV3 service worker, Google OAuth.
                </span>
                <div className="flex flex-wrap mt-2 items-center">
                  {["Chrome MV3", "Firestore", "OAuth", "JavaScript"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-4 py-1 m-1 text-teal-600 text-xs font-medium"
                      style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}
                    >
                      {tag}
                    </span>
                  ))}
                  <a
                    href="https://chromewebstore.google.com/detail/videovitals/glhnmjfkckhhohdomkfkojdhimpncnaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-sm underline hover:text-white"
                  >
                    Chrome Web Store
                  </a>
                  <a
                    href="https://github.com/gowthamswe/video-vitals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-sm underline hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-12 pl-5 md:pl-20 pr-4 text-[#b3b3b3]">
            <h2 className="text-xl font-bold mb-4">Timeline</h2>
            {timeline.map((entry, index) => (
              <div key={index} className="flex mb-5 card">
                <div className="flex flex-col">
                  <span className="font-bold">
                    {entry.title} <span className="ml-2">({entry.year})</span>
                  </span>
                  {entry.description && (
                    <span className="mt-2">{entry.description}</span>
                  )}
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="flex flex-wrap mt-2">
                      {entry.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full px-4 py-1 m-1 text-teal-600 text-xs font-medium"
                          style={{ backgroundColor: 'rgba(0, 128, 128, 0.1)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
