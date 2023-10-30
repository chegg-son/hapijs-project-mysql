/* eslint-disable no-undef */
/* eslint-disable indent */

window.addEventListener('load', () => {
    setTimeout(() => {
        axios.get('/getDatabase')
            .then((response) => {
                console.log(response.data.datas[0])
                document.getElementById('db').textContent = response.data.datas[0].tasks
            })
            .catch((e) => {
                console.log(e)
                document.getElementById('db').textContent = 'Gagal memuat database'
            })
    }, 1000)
})
