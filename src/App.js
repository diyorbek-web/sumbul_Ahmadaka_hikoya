import "./App.css";
import SentNumber from "./components/SentNumber.jsx";
import sumbul from "./assets/sumbul.jpg";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4 flex flex-col items-center">
      <Helmet>
        <html lang="uz" />
        <title>Insult, Infarkt</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Yurak og'rig'i (angina) sabablari va ORGANIC Sumbul Shifo kompleksi haqida ma'lumot."
        />
        <meta name="keywords" content="yurak, og'riq, shifo, ORGANIC" />
        <meta name="author" content="Sizning Ismingiz" />
      </Helmet>

      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <p className="text-center mt-5">
          Ahmad aka 2 qiz, 1 o'g'ilning otasi, yoshi 50 ga borib qoldi. Katta
          qizini turmushga chiqarganiga ham 8 yil bo'ldi, yaqinda 3-nabirasining
          to'yi. O'g'li esa intitutni bu yil tamomlaydi. Kichkina qizi ham
          xususiy institutda o'qiydi. Oilada yakkayu-yagona boquvchi, 2
          farzandining kontrakti, ro'zg'or harajatlariyu yaqinda bo'ladigan
          to'yning tashvishlari ham uning bo'ynida.{" "}
        </p>
        <p className="text-center mt-5">
          Ertalab uyquga to'ymasdan uyg'ondi-da, choy ichar-ichmas kira qilish
          uchun chiqib ketdi. Sog'lig'ida anchadan beri muammolar bor, lekin,
          hech kimga aytmaydi, shifokorlardan ham ko'ngli qolib bo'lgan. Og'li
          o'qishni bitirib, daromadga chiqqunigacha to'xtashga ham haqqi yo'q,
          sanatoriyalarda da'volanib chiqishni esa gapirmasa ham bo'ladi.{" "}
        </p>
        <p className="text-center mt-5">
          Bir kuni, Ahmad aka mashinada mijoz olib ketayotganda, u kuchli bosh
          og'rig'ini his qiladi. Rulda o‘tirgan holda, u o‘zining yomon ahvolini
          anglaydi – yurak urishi tezlashadi, ko‘zlari qizaradi, va u nafas
          olishda qiynalayotgandek tuyuladi. U o'zini qo'lga olishga harakat
          qiladi, lekin harakatlari befoyda.
        </p>{" "}
        <p className="text-center mt-5">
          {" "}
          Ushbu holat uning hayotiga qattiq ta'sir qiladi: u uyda o'z xotiniga
          yordam bera olmaydi, bolalari bilan o'ynay olmaydi, va do'stlari bilan
          vaqt o'tkazish imkoniyatidan mahrum bo'ladi.
        </p>{" "}
        <p className="text-center mt-5">
          Kasallik, Ahmad akaning hayotini to'liq o'zgartiradi. U avvalgi quvnoq
          va shod-xurram inson bo'lib, endi ko'p vaqtini xastalik va og'riq
          bilan o'tkazadi.
        </p>
        <p className="text-center mt-5">
          {" "}
          O'zining kuchi va chidamliligiga ishonchni yo'qotadi. Har safar
          tashqariga chiqqanda, u ichki xavotirlar bilan to'lib-toshadi.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src={sumbul}
            alt="Sumbul Shifosi"
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <SentNumber />
        </div>
      </div>
    </div>
  );
}

export default App;
