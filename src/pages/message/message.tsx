import { For, Show, type Component } from "solid-js";
import { Input, InputGroup, InputRightElement } from "@hope-ui/solid";
import "./message.css";
import user from "../../assets/png/user-icon.png"
import ai from "../../assets/png/ai-icon.png"
import { useNavigate } from "@solidjs/router";
import sendIcon from "../../assets/png/send-icon.png"
import PageWrapper from "../wrapper/wrapper";

const MessagePage: Component = () => {

  const navigate = useNavigate();

  const dataChat = [
    {
      user: "Halo! Aku lagi coba bikin tampilan chat di SolidJS, tapi masih bingung cara bikin balon chatnya biar rapi dan responsif.",
      ai: "Halo juga! Wah keren, SolidJS memang enak buat UI reaktif. Balon chat bisa kamu bikin pakai flexbox — satu sisi untuk user, satu sisi untuk AI. Mau aku kasih contoh CSS-nya?"
    },
    {
      user: "Boleh banget! Tapi sebelumnya, aku pengen data dummy dulu buat nguji tampilan chatku. Soalnya kalau pesannya pendek semua, tampilannya jadi nggak kelihatan realistis.",
      ai: "Setuju banget. Kalau kamu mau uji tampilan scroll dan wrapping text, kamu bisa isi dengan pesan panjang — misalnya simulasi percakapan tanya jawab tentang proyek atau topik tertentu. Mau aku bantu buatin contohnya?"
    },
    {
      user: "Iya, tolong ya. Sekalian deh, bikinin percakapan yang agak panjang, kayak orang lagi diskusi santai soal bikin website pakai SolidJS.",
      ai: "Oke siap 😄 Jadi misalnya kamu tanya-tanya seputar framework, best practice, sama optimisasi. Nanti aku balas dengan gaya ngobrol santai juga. Kamu mau contoh kayak gitu?"
    },
    {
      user: "Yup, kayak gitu. Aku juga pengen lihat gimana tampilan kalau pesannya sampai dua atau tiga baris di dalam bubble-nya.",
      ai: "Kalau gitu, nanti tiap pesan bisa kamu atur pakai CSS `max-width` biar nggak melebar ke seluruh layar, dan `word-wrap: break-word` supaya teksnya tetap rapi turun ke bawah. Biasanya `max-width: 70%` sudah ideal buat chat bubble."
    },
    {
      user: "Oke noted. By the way, kamu lebih suka pakai TailwindCSS atau Hope UI kalau buat styling di SolidJS?",
      ai: "Kalau buat komponen cepat dan konsisten, Hope UI oke banget — apalagi sudah ada banyak prebuilt komponen kayak `Card`, `Input`, dan `Button`. Tapi kalau mau tampilan custom banget, TailwindCSS lebih fleksibel karena kamu bisa ngatur spacing, warna, dan radius dengan bebas."
    },
    {
      user: "Iya sih, aku juga ngerasa Tailwind lebih bebas. Tapi kadang capek juga nulis class panjang-panjang. Aku pengen gabungin dua-duanya aja kayaknya.",
      ai: "Itu strategi bagus 😄 Gunakan Hope UI buat struktur utama, lalu fine-tuning tampilannya pakai Tailwind. Jadi kamu dapat kecepatan sekaligus fleksibilitas."
    },
    {
      user: "Oke noted. Oh iya, kalau aku mau simpan histori chatnya biar tetap muncul setelah reload halaman, mending pakai localStorage aja atau database kecil kayak IndexedDB?",
      ai: "Kalau cuma buat simulasi lokal, `localStorage` udah cukup. Tapi kalau nanti kamu mau tambah fitur kayak timestamp atau status pesan, bisa pertimbangkan IndexedDB atau bahkan backend API kecil pakai Express atau Supabase."
    },
    {
      user: "Wah keren juga. Aku baru kepikiran ke situ. Kalau misalnya aku mau tambahin avatar di tiap balon chat, mending disimpan di array datanya juga atau di-render dinamis aja?",
      ai: "Sebaiknya disimpan di data juga, biar mudah kalau nanti mau ganti gaya per pengguna. Misal setiap objek chat punya field `avatar` atau `side` untuk nentuin posisinya (kiri-kanan)."
    },
    {
      user: "Nice, jadi makin kebayang deh tampilannya. Kayaknya abis ini aku bakal buat versi dark mode juga biar lebih estetik.",
      ai: "Wah mantap! Jangan lupa pakai variable warna atau Tailwind `dark:` class supaya bisa otomatis adaptasi antara light dan dark theme. Kalau kamu pakai Hope UI, dia juga udah ada theme provider-nya loh."
    },
    {
      user: "Keren banget. Makasih ya bantuannya! Sekarang aku bisa lanjut bikin UI chat yang lebih realistis.",
      ai: "Sama-sama 😄 Semangat ngoding! Jangan lupa testing di beberapa resolusi biar tampilannya tetap responsif. Kalau butuh bantuan lagi, panggil aja aku ya!"
    }
  ];

  return (
    <div class="pl-[10vw] pe-[10vw] font-[Plus_Jakarta_Sans]">
      <div>
        <PageWrapper>
          <div class="chat-container">
            <For each={dataChat}>
              {(chat, index) => (
                <>
                  <div class="chat-item flex justify-end items-start gap-3">
                    <div class="chat-user">
                      {chat.user}
                    </div>
                    <img src={user} alt="user" class="w-12 h-12 object-contain rounded-full flex-shrink-0" />
                  </div>

                  <div class="chat-item flex justify-start items-start gap-3">
                    <img src={ai} alt="ai" class="w-12 h-12 object-contain rounded-full flex-shrink-0" />
                    <div class="chat-ai flex flex-col items-start gap-2">
                      {chat.ai}
                      <Show when={index() >= 1}>
                        <a href="https://wa.me/62882003076795" target="_blank" rel="noopener noreferrer">
                          <div class="redirect-whatsapp inline-block rounded-lg px-3 py-2 text-white bg-[#4F46E5] hover:bg-[#4338CA] transition">
                            Chat Whatsapp
                          </div>
                        </a>
                      </Show>
                    </div>
                  </div>
                </>
              )}
            </For>
          </div>
        </PageWrapper>
        <div class="fixed w-[75%] bottom-20">
          <InputGroup>
            <Input style={{ background: "white", "border-radius": "2vh", "box-shadow": "0 4px 6px rgba(76, 60, 227, 0.4)", }} height="8vh" _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} placeholder="Ask Anything..." />
            <InputRightElement
              class="send-msg"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                right: "2%",
              }}
              onClick={() => navigate("/")}
            >
              <img src={sendIcon} alt="" />
            </InputRightElement>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
