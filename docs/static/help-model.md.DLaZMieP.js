import{_ as n,c as a,o as e,al as p}from"./chunks/framework.DniHh94O.js";const h=JSON.parse('{"title":"常见问题 🤔","description":"","frontmatter":{},"headers":[],"relativePath":"help-model.md","filePath":"help-model.md","lastUpdated":1744286755000}'),l={name:"help-model.md"};function i(r,s,t,c,o,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="常见问题-🤔" tabindex="-1">常见问题 🤔 <a class="header-anchor" href="#常见问题-🤔" aria-label="Permalink to &quot;常见问题 🤔&quot;">​</a></h1><h2 id="目录说明" tabindex="-1">目录说明 <a class="header-anchor" href="#目录说明" aria-label="Permalink to &quot;目录说明&quot;">​</a></h2><ul><li><p><code>CreatorBox/models</code> 模型目录结构</p></li><li><p>首次运行会检测下载模型，均会自动下载到 <code>CreatorBox/models</code> 目录下</p></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─huggingface</span></span>
<span class="line"><span>│  └─hub</span></span>
<span class="line"><span>│      ├─.locks</span></span>
<span class="line"><span>│      ├─models--pyannote--segmentation-3.0</span></span>
<span class="line"><span>│      ├─models--pyannote--speaker-diarization-3.1</span></span>
<span class="line"><span>│      ├─models--pyannote--wespeaker-voxceleb-resnet34-LM</span></span>
<span class="line"><span>│      ├─models--Systran--faster-whisper-base</span></span>
<span class="line"><span>│      ├─models--Systran--faster-whisper-large-v2</span></span>
<span class="line"><span>│      └─models--Systran--faster-whisper-medium</span></span>
<span class="line"><span>├─keras</span></span>
<span class="line"><span>│  └─models</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├─modelscope</span></span>
<span class="line"><span>│  └─models</span></span>
<span class="line"><span>│      └─iic</span></span>
<span class="line"><span>│          ├─CosyVoice2-0.5B</span></span>
<span class="line"><span>│          ├─CosyVoice2-0___5B</span></span>
<span class="line"><span>└─torch</span></span>
<span class="line"><span>    └─hub</span></span>
<span class="line"><span>        ├─checkpoints</span></span>
<span class="line"><span>        └─snakers4_silero-vad_master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="模型相关" tabindex="-1">模型相关 <a class="header-anchor" href="#模型相关" aria-label="Permalink to &quot;模型相关&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">模型下载失败，出现如下错误❓</p><div class="language-log vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">log</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">An error occured while synchronizing the model Systran/faster-whisper-large-v3 from the Hugging Face Hub:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">An error happened while trying to locate the files on the Hub and we cannot find the appropriate snapshot folder for the</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">specified revision on the local disk. Please check your internet connection and try again.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Trying to load the model directly from the local cache, if it exists.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>解决方法：<a href="https://hf-mirror.com" target="_blank" rel="noreferrer">通过国内镜像下载模型</a></p></div>`,6)]))}const m=n(l,[["render",i]]);export{h as __pageData,m as default};
