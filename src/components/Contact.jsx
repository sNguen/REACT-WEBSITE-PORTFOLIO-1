import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl font-semibold"
            >
                Get in Touch
            </motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-lg"
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 1 }}
                    className="my-4 text-lg"
                >
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="my-4 text-lg"
                >
                    {CONTACT.phoneNo1}
                </motion.p>
                <motion.a
                    href={`mailto:${CONTACT.email}`}
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="my-4 text-lg border-b border-gray-600 hover:border-gray-900 transition-colors"
                >
                    {CONTACT.email}
                </motion.a>
            </div>
        </div>
    );
};

export default Contact;
