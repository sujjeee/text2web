import Script from 'next/script'
import React, { useEffect, useState } from 'react'

export default function Editcode() {
    const [codeData, setCodeData] = useState({ code: '', css: '', js: '' });

    useEffect(() => {
        const storedHtml = localStorage.getItem("html") || "";
        const storedCss = localStorage.getItem("css") || "";
        const storedJs = localStorage.getItem("js") || "";
        setCodeData({ code: storedHtml, css: storedCss, js: storedJs });
    }, []);

    return (
        <>
            <div className='w-full justify-center items-center flex'>
                <div className='w-full'>
                    <div
                        className="codepen"
                        data-height="750"
                        data-theme-id="dark"
                        data-default-tab="html,result"
                        data-slug-hash="jOeEBdK"
                        data-editable="true"
                        data-user="sujjeee"
                        data-prefill='{"tags":[],"scripts":[],"stylesheets":[]}'
                    >
                        <pre data-lang="html">{codeData.code}</pre>
                        <pre data-lang="css">{codeData.css}</pre>
                        <pre data-lang="js">{codeData.js}</pre>
                    </div>
                </div>
            </div>
            <Script
                src="https://cpwebassets.codepen.io/assets/embed/ei.js"
                strategy="afterInteractive"
            />
        </>
    );
};