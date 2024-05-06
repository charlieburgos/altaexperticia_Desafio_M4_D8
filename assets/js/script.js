
// variable fija getPosts llamada desde html del apoyo al desafio en evento onclick
const getPosts = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        if (data) {
            const Info = data.map(i =>
                `<p >
                    <li>
                        <strong>${i.title}</strong><br>
                        ${i.body}
                    </li>
                </p>`
            ).join('')
            
            document.getElementById('post-data').innerHTML = Info
        }
    } catch (error) {
        console.log(error)
    }
}