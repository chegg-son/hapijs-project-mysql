/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */

// Contoh skrip JavaScript di sini jika diperlukan
// axios menggunakan module import dari cdn

// const { default: axios } = require("axios")

// document.addEventListener('DOMContentLoaded', () => {
//     // Add an event listener for the button click
//     const showData1Button = document.getElementById('showData1')
//     showData1Button.addEventListener('click', () => {
//         axios.get('/getData1')
//             .then((response) => {
//                 const data1Element = document.getElementById('data1')
//                 data1Element.textContent = response.data.data1
//                 const data2Element = document.getElementById('data2')
//                 data2Element.textContent = response.data.data2
//                 const data3Element = document.getElementById('data3')
//                 data3Element.textContent = response.data.data3
//             })
//             .catch((error) => {
//                 console.error('Error:', error)
//             })
//     })
// })

// bagian ketika page termuat semua lalu eksekusi kode
window.addEventListener('load', () => {
    const loadingElement = document.getElementById('loading')
    loadingElement.textContent = 'Loading data' // You can customize this message
    let dotCount = 1

    const updatingTheDot = () => {
        loadingElement.textContent = 'Loading data ' + '. '.repeat(dotCount)
        dotCount = (dotCount % 3) + 1
    }

    const updateInterval = setInterval(updatingTheDot, 500)

    // Simulate a delay using setTimeout (you can adjust the delay time)
    setTimeout(() => {
        clearInterval(updateInterval)
        axios.get('/getData1')
            .then((response) => {
                const data1Element = document.getElementById('data1')
                data1Element.textContent = response.data.data1
                const data2Element = document.getElementById('data2')
                data2Element.textContent = response.data.data2
                const data3Element = document.getElementById('data3')
                data3Element.textContent = response.data.data3

                // bagian di bawah ini menjadikan style display diset ke none
                // sehingga element tersembunyikan setelah loading selesai
                loadingElement.style.display = 'none'
            })
            .catch((e) => {
                console.error('Error:', e)
                loadingElement.textContent = 'Error loading data. Please try again later.'
            })
    }, 2000)
})
