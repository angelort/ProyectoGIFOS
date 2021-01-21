let api_key = '?api_key=HnUlf4ud2geCJAxCuAM3xKGfBB9Z33HX';
        const results = document.getElementById('trending-list');

        async function trendingGifs() {
            let url = `https://api.giphy.com/v1/trending/searches${api_key}`;
            const response = await fetch(url);
            const trending = await response.json();
            console.log(trending.data);
            const term = [];

            for (let i = 0; i < 5; i += 1) {
                term.push(trending.data[i]);
                console.log(term);

                const currentTerm = document.createElement('span');

                if (i !== 4) {
                    currentTerm.innerHTML = `${trending.data[i]}, `;
                } else {
                    currentTerm.innerHTML = `${trending.data[i]}`;
                }
                results.append(currentTerm);
            }
            
        }
        trendingGifs();