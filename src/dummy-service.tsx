// export const ai_chat = {
//     "reply": "Tentu, saya bisa membantu Anda dengan memberikan contoh kode HTML sederhana untuk menghitung PPh 21. Berikut adalah contoh yang dapat Anda gunakan:\n\nhtml\n<!DOCTYPE html>\n<html lang=\"id\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Perhitungan PPh 21</title>\n    <script>\n        function hitungPPh() {\n            var gajiBulanan = parseFloat(document.getElementById(\"gajiBulanan\").value);\n            var pph = 0;\n\n            if (gajiBulanan > 50000000) {\n                pph = (gajiBulanan - 50000000) * 0.30 + (50000000 - 25000000) * 0.25 + (25000000 - 10000000) * 0.15 + (10000000) * 0.05;\n            } else if (gajiBulanan > 25000000) {\n                pph = (gajiBulanan - 25000000) * 0.25 + (25000000 - 10000000) * 0.15 + (10000000) * 0.05;\n            } else if (gajiBulanan > 10000000) {\n                pph = (gajiBulanan - 10000000) * 0.15 + (10000000) * 0.05;\n            } else if (gajiBulanan > 0) {\n                pph = gajiBulanan * 0.05;\n            }\n\n            document.getElementById(\"hasil\").innerHTML = \"PPh 21 yang harus dibayar: Rp \" + pph.toFixed(2);\n        }\n    </script>\n</head>\n<body>\n    <h1>Perhitungan PPh 21</h1>\n    <label for=\"gajiBulanan\">Gaji Bulanan (Rp):</label>\n    <input type=\"number\" id=\"gajiBulanan\" required>\n    <button onclick=\"hitungPPh()\">Hitung PPh 21</button>\n    <p id=\"hasil\"></p>\n</body>\n</html>\n\n\n### Penjelasan:\n- Kode di atas membuat halaman web sederhana yang meminta pengguna memasukkan gaji bulanan.\n- Fungsi hitungPPh() akan menghitung PPh 21 berdasarkan gaji bulanan yang dimasukkan.\n- Hasil perhitungan akan ditampilkan di elemen <p> dengan id \"hasil\".\n\nAnda dapat menyalin kode ini ke dalam file HTML dan membukanya di browser untuk melakukan perhitungan. Pastikan untuk menyesuaikan tarif pajak sesuai dengan peraturan perpajakan yang berlaku jika diperlukan.",
//     "model": "meta-llama/llama-3-8b-instruct",
//     "usage": {
//         "prompt_tokens": 41,
//         "completion_tokens": 55,
//         "total_tokens": 96,
//         "prompt_tokens_details": null,
//         "completion_tokens_details": null
//     }
// }


export const ai_chat = {
    "reply": "Something went wrong, please try again",
    "model": "meta-llama/llama-3-8b-instruct",
    "usage": {
        "prompt_tokens": 41,
        "completion_tokens": 55,
        "total_tokens": 96,
        "prompt_tokens_details": null,
        "completion_tokens_details": null
    }
}