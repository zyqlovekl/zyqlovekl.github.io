import{_ as n,o as s,c as a,a as t}from"./app.ce73d503.js";const p={},e=t(`<h1 id="app\u7248\u672C\u53F7" tabindex="-1"><a class="header-anchor" href="#app\u7248\u672C\u53F7" aria-hidden="true">#</a> APP\u7248\u672C\u53F7</h1><hr><h4 id="\u601D\u8DEF-\u8BBE\u7F6E\u5168\u5C40\u53D8\u91CF-\u6253\u5305\u524D-\u6267\u884Cnode\u547D\u4EE4-\u83B7\u53D6package\u4E2D\u7684\u7248\u672C\u53F7-\u6539\u53D8\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF-\u8BBE\u7F6E\u5168\u5C40\u53D8\u91CF-\u6253\u5305\u524D-\u6267\u884Cnode\u547D\u4EE4-\u83B7\u53D6package\u4E2D\u7684\u7248\u672C\u53F7-\u6539\u53D8\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u601D\u8DEF\uFF1A \u8BBE\u7F6E\u5168\u5C40\u53D8\u91CF \u6253\u5305\u524D \u6267\u884Cnode\u547D\u4EE4 \u83B7\u53D6package\u4E2D\u7684\u7248\u672C\u53F7 \u6539\u53D8\u5168\u5C40\u53D8\u91CF</h4><p>\u5728package.json \u91CC\u7684\u6253\u5305\u547D\u4EE4\u6267\u884C\u524D \u6267\u884Cnode\u8BED\u53E5 \uFF08&amp;&amp;\u7684\u4F5C\u7528\u662F \u4FDD\u8BC1\u4E4B\u524D\u7684\u547D\u4EE4\u6267\u884C\u5B8C\u624D\u4F1A\u6267\u884C\u540E\u9762\u7684\uFF09</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code> <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;build:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node setVersion.js &amp;&amp;  react-app-rewired build&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="setversion-js" tabindex="-1"><a class="header-anchor" href="#setversion-js" aria-hidden="true">#</a> setVersion.js</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> file <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BFB\u53D6package</span>
<span class="token keyword">let</span> configFile <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src/utils/config.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BFB\u53D6\u5168\u5C40\u53D8\u91CF</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">//readFile \u8BFB\u53D6\u6587\u4EF6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> version <span class="token operator">=</span> content<span class="token punctuation">.</span>version<span class="token punctuation">;</span> 

    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>configFile<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// var result = data2.replace(/(?&lt;=version:)[\\S]*/g, version);</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> data2<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">version: &#39;([\\s\\S]*)&#39;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">version: &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>configFile<span class="token punctuation">,</span> result<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// writeFile \u5199</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9000\u51FA\u6587\u4EF6</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","AppVersion.html.vue"]]);export{r as default};
