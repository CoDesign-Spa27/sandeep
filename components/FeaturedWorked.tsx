import {motion} from 'framer-motion'
import Link from 'next/link'
export const FeaturedWork = ()=>{
    return (
        <>
<motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            custom={2}
          > 
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                className="group cursor-pointer"
                onClick={() => window.open("https://www.grindcode.live", "_blank")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-sm font-medium bg-gradient-to-r from-[#9c40ff]/20 to-[#ffaa40]/10 px-3 py-1 rounded-full border border-[#ffaa40]/30">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">GrindCode</span>
                    <span className="text-xs">→</span>
                  </div>
                </div>
              </motion.div>

              <Link href="/blogs">
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm font-medium bg-gradient-to-r from-[#9c40ff]/20 to-[#ffaa40]/10 px-3 py-1 rounded-full border border-[#ffaa40]/30">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium ">Blog</span>
                      <span className="text-xs ">→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </>
    )
}