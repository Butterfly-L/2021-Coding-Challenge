import { data } from './articles.min.js';

        let filterData = JSON.parse(JSON.stringify(data));

        const color = ['bg-yellow-400', 'bg-red-500', 'bg-green-500']
        const containerOdd = document.querySelector('.container-odd');
        const containerEven = document.querySelector('.container-even');
        let oddHtml = '';
        let evenHtml = '';
        let colorNum = 0;
        let tagHtml = '';
        let widowWidth = window.innerWidth;
        const colorLength = color.length;

        function htmlFactory(colorNum, item, tagHtml) {
            let demoLinkHtml = item.demoLink ? `<a class="box_btn text-xl md:text-2xl font-bold text-gray-700 transition-all" href="${item.demoLink}" target=”_blank”>Demo <span class="transition-all arrow">&rarr;</span></a>` : ''

            return `
            <div class="card ${color[colorNum]} place-self-start">
            <div class="card_upper">
                <div class="ball"></div>
                <div class="ball ml-2"></div>
                <div class="ball ml-2"></div>
            </div>
            <h3 class="text-2xl md:text-4xl my-4 text-gray-700 font-bold">${item.title}</h3>
            <div class="flex">
                ${tagHtml}
            </div>
            <div class="flex justify-between mt-4">
                <a class="box_btn text-xl md:text-2xl font-bold text-gray-700 transition-all" href="${item.readLink}" target=”_blank”>
                Read 
                <span class="transition-all arrow">&rarr;</span>
                </a>
                ${demoLinkHtml}
            </div>
            </div>`
        }

        function showCards() {
            containerOdd.innerHTML = '';
            containerEven.innerHTML = '';
            let oddHtml = '';
            let evenHtml = '';
            let colorNumOdd = 0;
            let colorNumEven = colorNumOdd + 1;
            widowWidth = window.innerWidth;

            filterData.forEach((item, index) => {

                if (widowWidth < 768) {
                    colorNumEven = colorNumEven === colorLength ? 0 : colorNumEven;
                    item.tag.forEach(unit => {
                        tagHtml += `<div class="tag mr-2">#${unit}</div>`
                    })
                    evenHtml += htmlFactory(colorNumEven, item, tagHtml);
                    colorNumEven++
                    containerOdd.style.display = 'none';
                }

                if (widowWidth > 768 && index % 2 === 1) {
                    colorNumOdd = colorNumOdd === colorLength ? 0 : colorNumOdd;
                    item.tag.forEach(unit => {
                        tagHtml += `<div class="tag mr-2">#${unit}</div>`
                    })

                    oddHtml += htmlFactory(colorNumOdd, item, tagHtml);
                    colorNumOdd++
                }

                if (widowWidth > 768 && index % 2 === 0) {
                    colorNumEven = colorNumEven === colorLength ? 0 : colorNumEven;
                    item.tag.forEach(unit => {
                        tagHtml += `<div class="tag mr-2">#${unit}</div>`
                    })
                    evenHtml += htmlFactory(colorNumEven, item, tagHtml);
                    colorNumEven++
                }

                tagHtml = '';
            })

            containerOdd.innerHTML = oddHtml;
            containerEven.innerHTML = evenHtml;
        }

        const tagSelects = document.querySelectorAll('.tag-select');
        tagSelects.forEach(tag => {
            tag.addEventListener('click', selectTag);
        })


        function selectTag() {
            let tip = document.querySelector('.tip');
            let selected = document.querySelector('.selected');
            let isSameNode = selected?.isSameNode(this)
            
            tip.style.display = 'none';

            this.classList.toggle('selected');
            if(!isSameNode) selected?.classList.remove('selected');
            

            if(!this.classList.contains('selected')) filterData = JSON.parse(JSON.stringify(data));
            if(this.classList.contains('selected')){
                let result = []
                filterData = data.reduce((prev, current) => {
                if (current.tag.includes(this.dataset.value)) result.push(current);
                return result;
                }, []);
            }
            showCards();

        }

        window.onload = showCards();
        window.addEventListener('resize', showCards());