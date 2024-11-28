import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 */
let text = `
<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=blue&height=100&section=header&text=I%20am%20Full-Stack%20Developer,%20YongGyu&fontSize=30"/>
<br/>

<div class="pull-left">
  
<!-- Intro -->
## Introduction :raised_hands:

### I'm will trying to become a nice developer👍
  
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=sodra6&layout=compact)](https://github.com/sodra6/github-readme-stats)

</div>
  
<div class="pull-right">

<!-- My Skill Area -->
## Skill : 💻
<!-- Java -->
<img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white"/>
<!-- Spring -->
<img src="https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=Spring&logoColor=white"/>
<!-- Spring boot -->
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=Spring Boot&logoColor=white"/>
<!-- PostgreSQL -->
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=PostgreSQL&logoColor=white"/>
<br/>
<!-- Oracle -->
<img src="https://img.shields.io/badge/Oracle-F80000?style=flat&logo=Oracle&logoColor=white"/> 
<!-- Javascript -->
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=JavaScript&logoColor=white">
<!-- React -->
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>    

</div>    
<br/>



 
</div>

## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://sodra6.tistory.com/rss'); // 본인의 블로그 주소
    
    text += `<ul>`;
    
    // 최신 10개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 10; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
    }

    text += `</ul>`;
    
    // README.md 파일 생성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e);
    })
    console.log('업데이트 완료');
})();