export interface Section {
  title: string;
  content: string;
  code?: string;
  list?: string[];
  important?: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  icon: string;
  sections: Section[];
}

export const chapters: Chapter[] = [
  {
    id: "ch1",
    title: "Bölüm 1: Nesne Yönelimli Analiz ve Tasarım",
    description: "Programlama dilleri, OOP faydaları, .NET mimarisi ve İsim Alanları (Namespaces).",
    icon: "BookOpen",
    sections: [
      {
        title: "Programlama Dilleri ve Seviyeleri",
        content: "Programlama dilleri makineye talimat vermek için tasarlanmıştır. Makine dili (1 ve 0'lar) en alt seviyedir. Assembly dili makine diline göre daha anlaşılırdır ama zordur. Yüksek Seviye Diller (C#, Java, Python) ise insan diline daha yakın, öğrenmesi kolay dillerdir.",
        list: [
          "Makine Dili: Sadece 0 ve 1'lerden oluşur. Anlaşılması çok güçtür.",
          "Assembly: Bilgisayar mimarisine özelleşmiş düşük seviye dildir.",
          "Yüksek Seviye Diller: C, C++, Java, C# gibi diller. Derleyiciler ile makine diline çevrilirler."
        ]
      },
      {
        title: "Yapısal vs Nesne Yönelimli Programlama",
        content: "Yapısal programlamada program fonksiyon adı verilen küçük parçalara bölünür (Top-down yaklaşım). Yeni veri eklemek zordur. Nesne Yönelimli Programlamada (OOP) ise program nesnelere bölünür (Bottom-up yaklaşım). Veri ve fonksiyon eklemek kolaydır, veriler private/public olarak korunabilir."
      },
      {
        title: "Nesne Nedir ve OOP'nin Faydaları Nelerdir?",
        content: "Yazılım nesneleri, gerçek hayattaki nesnelere benzer. İki ortak özellikleri vardır: Durum (State) ve Davranış (Behavior). Durum değişkenlerde, davranış ise metotlarda tutulur.",
        list: [
          "Modülerlik: Bir nesnenin kodu diğerlerinden bağımsız yazılabilir ve değiştirilebilir.",
          "Bilgi Saklama (Kapsülleme): Nesnenin iç yapısı dış dünyadan gizlenir, sadece metotlar aracılığıyla iletişim kurulur.",
          "Kodun Yeniden Kullanılması: Yazılmış ve test edilmiş nesneler başka projelerde güvenle kullanılabilir.",
          "Ekleme ve Hata Ayıklama Kolaylığı: Sorunlu nesne kolayca sistemden çıkarılıp yenisi eklenebilir."
        ],
        important: "Veri Kapsüllemesi (Encapsulation): Veriyi ve o veriye erişen metotları tek bir yapı (sınıf) içinde toplama ve dışarıdan doğrudan erişimi kısıtlama işlemidir."
      },
      {
        title: ".NET Bileşenleri ve Mimari",
        content: ".NET platformunda C# kodu önce IL (Intermediate Language - Ara Dil) koduna derlenir. Çalıştırılmak istendiğinde CLR (Common Language Runtime) içindeki JIT (Just In Time) derleyicileri bu IL kodunu makine diline çevirir.",
        list: [
          "CLR (Ortak Dil Çalışma Platformu): Programların çalışmasını kontrol eden arabirimdir.",
          "IL (Ara Dil): İşlemciye bağlı olmayan, derlenmiş ara koddur. İçinde Metadata (veri tipleri ve metot bilgileri) barındırır.",
          "JIT (Just In Time): IL kodunu çalışma zamanında makine koduna çevirir. 3 çeşittir: Normal JIT (çağrıldıkça derler, önbelleğe alır), Pre JIT (tümünü baştan derler, hızlıdır ama hafıza yorar), Eco JIT (kısıtlı hafızalı sistemler içindir).",
          "CTS (Ortak Tip Sistemi): .NET dillerinin aynı veri tiplerini kullanmasını sağlar (Örn: int tipi C# ve VB.NET'te aynıdır).",
          "CLS (Ortak Dil Spesifikasyonu): Diller arası etkileşimi sağlayan kurallar bütünüdür.",
          "Assembly: Derlenmiş kodlar ve metadata içeren .exe veya .dll dosyalarıdır. Versiyon bilgisi tutar."
        ]
      },
      {
        title: "İsim Alanları (Namespaces) ve .NET Sınıf Kütüphanesi",
        content: ".NET Framework'ün sunduğu temel türler ve sınıflar 'namespace' kavramı ile organize edilmiştir. C#'ta bu kütüphaneleri kullanmak için 'using' anahtar sözcüğü kullanılır.",
        list: [
          "System: Temel sınıfları içerir (Console, Math vb.). Hiyerarşinin tepesindedir.",
          "System.Data: Veritabanı işlemleri (Örn: System.SqlClient).",
          "System.Xml: XML veri biçimlendirme işlemleri.",
          "System.Net: Ağ bileşenleri ve HTTP protokolleri.",
          "System.IO: Dosya okuma/yazma işlemleri.",
          "System.Windows.Forms: Masaüstü görsel kontrolleri."
        ],
        code: `using System;
using System.IO;

namespace OrnekAlan {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("System namespace'i sayesinde Console sınıfını doğrudan kullanabiliyoruz.");
        }
    }
}`
      }
    ]
  },
  {
    id: "ch2",
    title: "Bölüm 2: Temel Veri Türleri ve Bellek Yönetimi",
    description: "Değişken kuralları, bellek bölgeleri, sabitler, boxing/unboxing ve detaylı tür dönüşümleri.",
    icon: "Database",
    sections: [
      {
        title: "Bellek Bölgeleri",
        content: "C#'ta verilerin bellekte tutulması için 6 farklı bölge vardır:",
        list: [
          "Stack Bölgesi: Değer tiplerinin tutulduğu, derleyici tarafından yer tahsisatı önceden bilinen hızlı bellek alanıdır.",
          "Heap Bölgesi: Referans tiplerinin tutulduğu, 'new' anahtarı ile dinamik olarak yer ayrılan bellek alanıdır. Stack'e göre daha yavaştır.",
          "Register Bölgesi: Mikroişlemci üzerindeki özel yapılardır, veri transferi en hızlı buradadır.",
          "Static Bölge: 'static' olarak tanımlanan ve programın çalışma süresince bellekte kalan verilerin tutulduğu alandır.",
          "Sabit Bölge: Değerlerin değişmeden sürekli aynı kaldığı bölümdür.",
          "RAM Olmayan Bölge: Disk alanlarını temsil eder."
        ]
      },
      {
        title: "Değişken İsimlendirme Kuralları ve Faaliyet Alanları (Scopes)",
        content: "Değişken tanımlarken belirli kurallara uyulmalıdır. Ayrıca bir değişkene sadece tanımlandığı blok (scope) içerisinden ulaşılabilir.",
        list: [
          "Büyük/küçük harf duyarlılığı vardır (sayi ile Sayi farklıdır).",
          "Nümerik bir karakter ile başlayamaz (1sayi yanlış, sayi1 doğru).",
          "Boşluk karakteri içeremez.",
          "Yerel (Local) Değişken: Tanımlandığı blok ({ }) arasında kaldığı sürece yaşar.",
          "Döngü Değişkeni: Döngü bloğu dışına çıkılmadığı sürece yaşar."
        ],
        code: `int globalSayi = 10; // Sınıf seviyesinde (Field)

void Metot() {
    int yerelSayi = 5; // Sadece bu metot içinde geçerli
    
    for(int i = 0; i < 5; i++) {
        // 'i' sadece bu döngü bloğunda geçerlidir
        Console.WriteLine(i);
    }
    // Console.WriteLine(i); // HATA: 'i' burada tanımsızdır
}`
      },
      {
        title: "Sabitler (Constants)",
        content: "Program boyunca değerinin değişmeyeceği düşünülen veriler 'const' anahtar sözcüğü ile tanımlanır.",
        list: [
          "Tanımlandıkları anda ilk değerleri atanmalıdır.",
          "Sabit ifadelere ancak başka sabit ifadelerle değer atanabilir.",
          "Kendi yapılarından dolayı statik bir nesne oldukları için ayrıca 'static' anahtar sözcüğü kullanılmaz."
        ],
        code: `const double pi = 3.14;
const int a = 5;
const int b = a + 10; // Geçerli, çünkü 'a' da bir sabit
// pi = 3.14159; // HATA: Sabitler sonradan değiştirilemez`
      },
      {
        title: "Değer ve Referans Tipleri Arasındaki Farklar",
        content: "Değer tipleri (int, double, bool, struct vb.) değişkenin değerini direkt bellek bölgesinde (Stack) saklar. Referans tipleri (object, string, class, array) ise Heap alanında yaratılan nesnelerin adreslerini (referanslarını) saklar.",
        important: "İki değer tipi birbirine eşitlendiğinde değerler kopyalanır (biri değişirse diğeri etkilenmez). İki referans tipi eşitlendiğinde ise adresler kopyalanır (biri değişirse diğeri de etkilenir).",
        code: `// Değer Tipi Örneği
int a = 10;
int b = a;
a = 20;
Console.WriteLine(b); // Çıktı: 10 (b etkilenmez)

// Referans Tipi Örneği
int[] dizi1 = { 1, 2, 3 };
int[] dizi2 = dizi1;
dizi1[0] = 99;
Console.WriteLine(dizi2[0]); // Çıktı: 99 (dizi2 de etkilenir çünkü aynı adresi gösterirler)`
      },
      {
        title: "var ve dynamic",
        content: "'var' anahtar sözcüğü ile tanımlanan değişkenin tipi, ilk atanan değere göre derleme zamanında (compile time) belirlenir. 'dynamic' ise çalışma zamanında (runtime) tip belirler ve tipi sonradan değişebilir.",
        code: `var isim = "Merve"; // Tipi string olarak belirlendi
// isim = 5; // HATA VERİR: string tipe int atanamaz

dynamic deger = "Kesim";
Console.WriteLine(deger.GetType()); // System.String
deger = 10; // HATA VERMEZ, tipi int olarak değişir
Console.WriteLine(deger.GetType()); // System.Int32`
      },
      {
        title: "Tür Dönüşümleri ve ToString() Metodu",
        content: "Farklı türden değişkenlerin aynı ifadede işlem görmesi için tür dönüşümü gerekir. Bilinçsiz (Implicit) dönüşüm küçük türün büyük türe otomatik çevrilmesidir. Bilinçli (Explicit) dönüşüm ise cast operatörü '(tip)' ile yapılır.",
        list: [
          "Bilinçsiz Dönüşüm: Küçük türün büyük türe çevrilmesi (Örn: byte -> int). Veri kaybı olmaz.",
          "Bilinçli Dönüşüm (Cast): Büyük türün küçük türe çevrilmesi (Örn: double -> int).",
          "System.Convert Sınıfı: Convert.ToInt32(), Convert.ToDouble(), Convert.ToBoolean() gibi metotlarla güvenli dönüşüm sağlar.",
          "ToString() Metodu: Bütün temel ve referans türlerde kullanılabilir. Amacı veriyi string'e dönüştürmektir."
        ],
        code: `// Bilinçsiz Dönüşüm
byte kucukSayi = 10;
int buyukSayi = kucukSayi; // Otomatik dönüşür

// Bilinçli Dönüşüm (Cast)
double ondalikli = 32.54;
int tamSayi = (int)ondalikli; // 32 olur, ondalık kısım kaybolur

// Convert Sınıfı ve ToString()
string metin = "50";
int sayi1 = Convert.ToInt32(metin);
string yazi = sayi1.ToString();`
      },
      {
        title: "Checked ve Unchecked Blokları",
        content: "Bilinçli dönüşümlerde büyük bir tür küçük bir türe çevrilirken kapasite aşımı (overflow) olabilir. Bu durumu kontrol etmek için 'checked' bloğu kullanılır. Taşma varsa program hata (Exception) fırlatır.",
        code: `int a = 400;
byte b;

checked {
    // byte maksimum 255 alabilir. 400 atamaya çalıştığımız için 
    // burada System.OverflowException hatası fırlatılır.
    b = (byte)a; 
}

unchecked {
    // Hata fırlatmaz, ancak veri kaybı yaşanır ve b anlamsız bir değer alır (144).
    // 400'ün binary karşılığı: 00000000 00000000 00000001 10010000
    // byte sadece son 8 biti (10010000 = 144) alır.
    b = (byte)a; 
}`
      },
      {
        title: "Boxing ve Unboxing",
        content: "Değer tipindeki bir verinin 'object' içerisine aktarılarak Heap bölgesine taşınmasına Boxing denir. Heap'teki object nesnesinin içindeki değerin tekrar kendi türüne (Stack'e) döndürülmesine Unboxing denir.",
        important: "Boxing işlemi normal bir atamadan 20 kat, Unboxing ise 4 kat daha yavaştır. Gereksiz boxing/unboxing işlemlerinden kaçınılmalıdır. Unboxing yapılırken mutlaka tür dönüşüm (cast) operatörü kullanılmalıdır.",
        code: `int i = 123;      // Değer tipi (Stack)
object o = i;     // BOXING: Değer tipi object'e (Heap) kopyalandı (Bilinçsiz)
int j = (int)o;   // UNBOXING: Object içindeki değer tekrar int türüne alındı (Bilinçli cast şart)`
      }
    ]
  },
  {
    id: "ch3",
    title: "Bölüm 3: Operatörler, Bit Çevrimleri ve Akış Kontrolü",
    description: "Matematiksel, mantıksal, bitwise operatörler, operatör önceliği ve döngüler.",
    icon: "GitBranch",
    sections: [
      {
        title: "Temel ve Özel Amaçlı Operatörler",
        content: "Aritmetik (+, -, *, /, %), Karşılaştırma (==, !=, <, >) ve Mantıksal (&&, ||, !) operatörlerin yanı sıra C#'ta özel amaçlı operatörler de bulunur.",
        list: [
          "Ternary (?:): Tek satırda if-else yazmayı sağlar. (koşul ? dogru_ise : yanlis_ise)",
          "typeof: Bir nesnenin veya tipin System.Type bilgisini verir.",
          "sizeof: Değer tiplerinin bellekte kapladığı byte miktarını verir.",
          "() Operatörü: Tür dönüştürme (cast) için kullanılır.",
          "[] Operatörü: Dizilerde indeks belirtmek için kullanılır.",
          ". Operatörü: Sınıfın veya yapının elemanlarına ulaşmak için kullanılır."
        ],
        code: `int yas = 20;
// Ternary Operatörü
string durum = (yas >= 18) ? "Reşit" : "Reşit Değil";

// typeof kullanımı
Type tip = typeof(int);
Console.WriteLine(tip.Name); // Int32`
      },
      {
        title: "Operatör Önceliği (Precedence)",
        content: "Aynı satırda birden fazla operatör kullanıldığında işlemler belirli bir öncelik sırasına göre yapılır. Atama operatörleri hariç soldan sağa öncelik ilişkisi vardır.",
        list: [
          "1. Öncelikliler: x.y, f(x), a[x], x++, x--, new, typeof, checked, unchecked",
          "2. Unary (Tekil): +, -, !, ~, ++x, --x, (tip)x",
          "3. Çarpma/Bölme/Mod: *, /, %",
          "4. Toplama/Çıkarma: +, -",
          "5. Kaydırma: <<, >>",
          "6. İlişkisel: <, >, <=, >=, is, as",
          "7. Eşitlik: ==, !=",
          "8. Mantıksal Bitsel: & -> ^ -> |",
          "9. Mantıksal Koşul: && -> ||",
          "10. Ternary ve Atama: ?:, =, *=, /=, +=, -= vb."
        ],
        code: `int i = 5 * 4 / 6; 
// Önce 5 * 4 = 20 yapılır (soldan sağa kuralı), sonra 20 / 6 = 3 (int olduğu için küsurat atılır).
Console.WriteLine(i); // Çıktı: 3`
      },
      {
        title: "Bit Tabanlı (Bitwise) Operatörler",
        content: "Sayıları ikilik (binary) sistemde ele alır ve bitleri üzerinde işlem yapar. Genellikle donanım kontrolü, kriptografi ve performans gerektiren düşük seviye işlemlerde kullanılır.",
        list: [
          "& (Bitwise AND - VE): Karşılıklı bitlerin ikisi de 1 ise 1, aksi halde 0 üretir.",
          "| (Bitwise OR - VEYA): Karşılıklı bitlerden en az biri 1 ise 1 üretir.",
          "^ (Bitwise XOR - ÖZEL VEYA): Karşılıklı bitler farklıysa 1, aynıysa 0 üretir.",
          "~ (Bitwise NOT - DEĞİL): Tüm bitleri tersine çevirir (0'ları 1, 1'leri 0 yapar).",
          "<< (Sola Kaydırma): Bitleri belirtilen sayı kadar sola kaydırır (Sayıyı 2'nin kuvvetleriyle çarpmak gibidir).",
          ">> (Sağa Kaydırma): Bitleri belirtilen sayı kadar sağa kaydırır (Sayıyı 2'nin kuvvetlerine bölmek gibidir)."
        ],
        code: `byte a = 153; // Binary: 1001 1001
byte b = 104; // Binary: 0110 1000

int ve = a & b;   // 0000 1000 (Sonuç: 8)
int veya = a | b; // 1111 1001 (Sonuç: 249)
int xor = a ^ b;  // 1111 0001 (Sonuç: 241)
int degil = ~a;   // 0110 0110 (Int32 olarak ters çevrilir)

int solaKaydir = 1 << 4; // 0000 0001 bitini 4 kez sola kaydırır: 0001 0000 (Sonuç: 16)
int sagaKaydir = 16 >> 2; // 0001 0000 bitini 2 kez sağa kaydırır: 0000 0100 (Sonuç: 4)`
      },
      {
        title: "Akış Kontrolü ve Atlama (Jump) Deyimleri",
        content: "Programın karar verme mekanizmaları if-else ve switch-case'dir. Döngüleri ve akışı kontrol etmek için atlama deyimleri kullanılır.",
        list: [
          "break: Çalışan döngüyü veya switch bloğunu anında sonlandırır.",
          "continue: Döngünün o anki adımını atlayıp bir sonraki tekrara geçer.",
          "goto: Programın etiket ile belirlenmiş herhangi bir kısmına atlamak için kullanılır (OOP'de kullanımı tavsiye edilmez).",
          "return: Metodu sonlandırır ve çağrıldığı yere geri döner."
        ],
        code: `// goto örneği
int m = 0;
bas: 
m++;
if (m <= 5) goto bas; // m 5 olana kadar 'bas' etiketine döner
Console.WriteLine("Döngü bitti: " + m);

// switch-case örneği
int secim = 1;
switch (secim) {
    case 1:
        Console.WriteLine("Toplama");
        break; // Her case break, return veya goto ile bitmelidir.
    default:
        Console.WriteLine("Geçersiz");
        break;
}`
      },
      {
        title: "System.Random Sınıfı",
        content: "Rastgele sayı üretmek için .NET Framework sınıf kütüphanesindeki System.Random sınıfı kullanılır.",
        code: `Random rnd = new Random();
int sayi1 = rnd.Next(10, 20); // 10 ile 20 arasında (10 dahil, 20 hariç)
int sayi2 = rnd.Next(50);     // 0 ile 50 arasında
int sayi3 = rnd.Next();       // Herhangi bir rastgele int
double sayi4 = rnd.NextDouble(); // 0.0 ile 1.0 arasında ondalıklı sayı`
      }
    ]
  },
  {
    id: "ch4",
    title: "Bölüm 4: Diziler (Arrays) ve System.Array",
    description: "Tek boyutlu, çok boyutlu, düzensiz diziler, Array sınıfı metotları ve ArrayList.",
    icon: "List",
    sections: [
      {
        title: "Dizi Tanımlama ve Bellek Yapısı",
        content: "Bellekte ardışık yer alan aynı türden nesneler kümesidir. C#'ta diziler referans tipidir ve System.Array sınıfından türerler. 'new' anahtar sözcüğü ile oluşturulurlar. Boyutları bir kez belirlendikten sonra değiştirilemez.",
        code: `// Farklı dizi tanımlama yöntemleri
int[] dizi1 = new int[5]; // 5 elemanlı, içi 0 dolu
string[] dizi2 = { "C#", "Java", "Python" };
int[] dizi3 = new int[] { 10, 20, 30 };

// Dizilerin birbirine atanması (Referans kopyalama)
int[] a = { 55, 16, 88 };
int[] b = a; // b dizisi a'nın bellekteki adresini gösterir
b[0] = 99;
Console.WriteLine(a[0]); // Çıktı: 99 (a da etkilenir)`
      },
      {
        title: "Çok Boyutlu (Matris) ve Düzensiz (Jagged) Diziler",
        content: "Matrislerde satır ve sütun sayıları sabittir. Düzensiz dizilerde (Jagged Arrays) ise her satırın sütun sayısı (eleman sayısı) farklı olabilir, çünkü bunlar 'dizilerin dizisi'dir.",
        code: `// 1. Düzenli Dizi (Matris) - 3 satır, 2 sütun
int[,] matris = new int[3, 2] {
    { 1, 2 },
    { 3, 4 },
    { 5, 6 }
};
Console.WriteLine(matris[1, 0]); // Çıktı: 3

// 2. Düzensiz Dizi (Jagged Array)
int[][] jagged = new int[3][];
jagged[0] = new int[] { 1, 2 };       // 1. satır 2 elemanlı
jagged[1] = new int[] { 3, 4, 5, 6 }; // 2. satır 4 elemanlı
jagged[2] = new int[] { 7, 8, 9 };    // 3. satır 3 elemanlı

Console.WriteLine(jagged[1][2]); // Çıktı: 5`
      },
      {
        title: "System.Array Sınıfı Özellikleri ve Metotları",
        content: "Diziler System.Array sınıfından türer ve birçok hazır özellik/metot barındırır.",
        list: [
          "IsFixedSize: Eleman sayısının sabit olup olmadığını verir (bool).",
          "IsReadOnly: Sadece okunabilir olup olmadığını verir (bool).",
          "Length: Toplam eleman sayısını verir.",
          "Rank: Dizinin boyutunu verir (1 boyutlu, 2 boyutlu vb.).",
          "GetLength(i): Dizinin i. boyutundaki eleman sayısını verir.",
          "GetUpperBound(i): Dizinin i. boyuttaki son indis değerini verir.",
          "GetValue(i) / SetValue(val, i): İlgili indeksteki değeri okur veya yazar.",
          "Sort(): Diziyi küçükten büyüğe sıralar.",
          "Reverse(): Diziyi tersine çevirir.",
          "Clear(): Belirtilen aralıktaki elemanları sıfırlar.",
          "BinarySearch(): Sıralı dizilerde arama yapar, bulursa indeksini döndürür.",
          "Copy() / CopyTo(): Dizinin bir bölümünü veya tamamını başka diziye kopyalar.",
          "Clone(): Dizinin bit bit kopyasını (sığ kopya) çıkarır.",
          "CreateInstance(): Yeni bir dizi nesnesi oluşturur.",
          "Resize(): Mevcut dizinin eleman sayısını (eski verileri koruyarak) değiştirir."
        ],
        code: `int[] sayilar = { 45, 12, 78, 34, 89, 23 };

Array.Sort(sayilar); // Sıralama
Array.Reverse(sayilar); // Ters çevirme

// Arama (BinarySearch kullanmak için dizi sıralı OLMALIDIR)
Array.Sort(sayilar);
int indeks = Array.BinarySearch(sayilar, 34); 

// Dizinin boyutunu değiştirme (Eski veriler korunur)
Array.Resize(ref sayilar, 10);

// Elemanları sıfırlama (1. indisten itibaren 3 elemanı sıfırlar)
Array.Clear(sayilar, 1, 3);

Console.WriteLine("Boyut: " + sayilar.Rank);`
      },
      {
        title: "Dizilerin Metotlara Parametre Olarak Gönderilmesi",
        content: "Diziler referans tipi olduğu için metotlara adresleri (referansları) gönderilir. Metot içinde dizinin elemanlarında yapılan değişiklikler orijinal diziyi etkiler.",
        code: `class Program {
    static void DiziDegistir(int[] dizi) {
        dizi[0] = 999; // Orijinal diziyi etkiler
    }

    // Metotlar geriye dizi de döndürebilir
    static int[] DiziOlustur() {
        return new int[] { 1, 2, 3 };
    }

    static void Main() {
        int[] sayilar = { 10, 20, 30 };
        DiziDegistir(sayilar);
        Console.WriteLine(sayilar[0]); // Çıktı: 999
    }
}`
      },
      {
        title: "ArrayList Sınıfı",
        content: "Dizilerin sabit boyut kısıtlamasını ortadan kaldıran, dinamik olarak büyüyüp küçülebilen koleksiyon sınıfıdır. 'System.Collections' kütüphanesinde bulunur. İçerisinde 'object' tipinde veri tuttuğu için her türden veri eklenebilir.",
        important: "ArrayList'e değer tipi eklendiğinde Boxing, geri okunurken Unboxing işlemi gerçekleşir. Bu durum performans kaybına yol açabilir.",
        code: `using System.Collections;

ArrayList liste = new ArrayList();

// Farklı türlerde veri ekleme
liste.Add("Ahmet"); // string
liste.Add(34);      // int (Boxing)
liste.Add(true);    // bool (Boxing)

// Eleman silme
liste.Remove("Ahmet"); // Değere göre silme
liste.RemoveAt(0);     // İndekse göre silme

// Eleman sayısını öğrenme
int adet = liste.Count;`
      }
    ]
  },
  {
    id: "ch5",
    title: "Bölüm 5: Metotlar ve İleri Seviye Kullanımları",
    description: "Metot kuralları, ref/out, aşırı yükleme, params, rekürsif metotlar ve Main metodu.",
    icon: "BoxSelect",
    sections: [
      {
        title: "Metot Bildirimi ve Kuralları",
        content: "Metotlar, belirli bir işlemi gerçekleştiren kod bloklarıdır. Kod tekrarını önler. Geriye değer döndüren (return) veya döndürmeyen (void) olarak tanımlanabilirler.",
        list: [
          "Metot isimleri sayı ile başlayamaz, boşluk içeremez.",
          "Bir metot içerisinde başka bir metot tanımlanamaz (Local functions hariç, ancak klasik OOP'de yasaktır).",
          "Metot parametrelerinin türleri tek tek belirtilmelidir (Örn: int a, b YANLIŞTIR. int a, int b DOĞRU).",
          "İsteğe bağlı (default) parametreler, tüm zorunlu parametrelerden sonra yer almalıdır."
        ],
        code: `class Matematik {
    // Geriye değer döndüren metot
    public int Topla(int a, int b) {
        return a + b;
    }

    // İsteğe bağlı parametreli metot
    public void Yazdir(string mesaj, int tekrar = 1) {
        for(int i=0; i<tekrar; i++) Console.WriteLine(mesaj);
    }
}`
      },
      {
        title: "ref ve out Anahtar Sözcükleri",
        content: "Normalde değer tipleri metoda 'değer kopyası' olarak gider (Pass by Value). 'ref' ve 'out' kullanıldığında ise değişkenin bellekteki adresi gönderilir (Pass by Reference). Böylece metot içindeki değişiklik orijinal değişkeni etkiler.",
        list: [
          "ref: Metoda gönderilmeden önce değişkene mutlaka İLK DEĞER atanmış olmalıdır.",
          "out: İlk değer atama zorunluluğu yoktur, ancak metot bloğu içinde değişkene mutlaka bir değer ATANMAK ZORUNDADIR."
        ],
        code: `// ref kullanımı
static void DegistirRef(ref int sayi) {
    sayi = 100;
}

// out kullanımı
static void DegistirOut(out int sayi) {
    sayi = 200; // Metot içinde değer atamak zorunludur
}

static void Main() {
    int a = 5; // ref için ilk değer şart
    DegistirRef(ref a);
    Console.WriteLine(a); // Çıktı: 100

    int b; // out için ilk değer şart değil
    DegistirOut(out b);
    Console.WriteLine(b); // Çıktı: 200
}`
      },
      {
        title: "Metotların Aşırı Yüklenmesi (Overloading)",
        content: "Aynı isimde fakat parametre sayısı veya parametre tipleri farklı olan birden fazla metot tanımlanabilmesidir. Sadece geri dönüş tipinin farklı olması aşırı yükleme için YETERLİ DEĞİLDİR.",
        code: `public class Islem {
    public int Carp(int a, int b) {
        return a * b;
    }
    
    // Parametre sayısı farklı
    public int Carp(int a, int b, int c) {
        return a * b * c;
    }
    
    // Parametre tipi farklı
    public double Carp(double a, double b) {
        return a * b;
    }
}`
      },
      {
        title: "Değişken Sayıda Parametre (params)",
        content: "Metoda kaç adet parametre gönderileceği önceden bilinmiyorsa 'params' anahtar kelimesi ile bir dizi tanımlanır. 'params' parametresi her zaman parametre listesinin EN SONUNDA olmalıdır.",
        code: `static int SayilariTopla(string mesaj, params int[] sayilar) {
    int toplam = 0;
    foreach (int sayi in sayilar) {
        toplam += sayi;
    }
    Console.WriteLine(mesaj + toplam);
    return toplam;
}

// Kullanımı (İstediğimiz kadar int gönderebiliriz)
SayilariTopla("Sonuç: ", 1, 2, 3);
SayilariTopla("Sonuç: ", 10, 20, 30, 40, 50);`
      },
      {
        title: "Rekürsif (Özyineli) Metotlar",
        content: "Kendi kendini çağıran metotlara rekürsif metot denir. Mutlaka kendini çağırmayı durduracak bir 'çıkış koşulu' (base case) olmalıdır, aksi takdirde StackOverflow hatası alınır.",
        code: `// Faktöriyel hesabı yapan rekürsif metot
static int Faktoriyel(int n) {
    // Çıkış koşulu
    if (n == 0 || n == 1) {
        return 1;
    }
    // Kendi kendini çağırma
    return n * Faktoriyel(n - 1);
}

// Çalışma mantığı (Faktoriyel(4) için):
// 4 * Faktoriyel(3)
// 4 * (3 * Faktoriyel(2))
// 4 * (3 * (2 * Faktoriyel(1)))
// 4 * 3 * 2 * 1 = 24`
      },
      {
        title: "Main Metodu",
        content: "Programın çalışmaya başladığı başlangıç noktasıdır. Herhangi bir nesneye ihtiyaç duymadan çalışabilmesi için 'static' olarak tanımlanır.",
        list: [
          "Geri dönüş tipi 'void' veya 'int' olabilir. 'int' döndürürse işletim sistemine programın nasıl sonlandığını (0: başarılı, 1: hatalı) bildirir.",
          "Parametre olarak 'string[] args' alabilir. Bu, komut satırından girilen parametreleri yakalamak içindir."
        ],
        code: `class Program {
    static int Main(string[] args) {
        Console.WriteLine("Program başladı.");
        if(args.Length > 0) {
            Console.WriteLine("İlk argüman: " + args[0]);
        }
        return 0; // Başarılı çıkış kodu
    }
}`
      }
    ]
  },
  {
    id: "ch6",
    title: "Bölüm 6: Sınıflar, Kapsülleme ve OOP Prensipleri",
    description: "Sınıf yapısı, iç içe sınıflar, erişim belirleyiciler, properties, constructor/destructor ve statik üyeler.",
    icon: "ShieldCheck",
    sections: [
      {
        title: "Sınıf (Class) ve İç İçe Sınıflar",
        content: "Sınıflar, nesnelerin şablonlarını tanımlayan yapısal elemanlardır. Sınıflar bellekte yer kaplamaz, ancak 'new' anahtar kelimesi ile nesne (instance) üretildiğinde Heap bölgesinde yer ayrılır. Sınıflar ayrı ayrı tanımlanabildiği gibi bir sınıfın içinde başka bir sınıf da (Nested Class) tanımlanabilir.",
        code: `class DisSinif {
    public int x = 10;
    
    // İç içe sınıf (Nested Class)
    public class IcSinif {
        public int y = 20;
    }
}

// Kullanımı
DisSinif dis = new DisSinif();
DisSinif.IcSinif ic = new DisSinif.IcSinif();`
      },
      {
        title: "Erişim Belirleyiciler",
        content: "Sınıf üyelerine nereden erişilebileceğini belirler.",
        list: [
          "public: İstenilen her yerden erişilebilir.",
          "private: Sadece tanımlandığı sınıf içerisinden erişilebilir. (Varsayılan)",
          "protected: Tanımlandığı sınıf ve o sınıftan miras alan (türeyen) sınıflardan erişilebilir.",
          "internal: Sadece bulunduğu proje (assembly / dll / exe) içerisinden erişilebilir.",
          "protected internal: Bulunduğu assembly içinden VEYA o sınıftan türeyen sınıflardan erişilebilir."
        ]
      },
      {
        title: "Kapsülleme (Encapsulation) ve Özellikler (Properties)",
        content: "Bir nesnenin iç durumunu (private değişkenleri) dış dünyadan gizlemek ve bu verilere sadece kontrollü bir şekilde erişim sağlamak için Kapsülleme kullanılır. C#'ta bu işlem 'get' (okuma) ve 'set' (yazma) blokları içeren Properties (Özellikler) ile yapılır.",
        code: `class Ogrenci {
    private int notu; // Gizli veri

    public int Notu {
        get { return notu; }
        set { 
            // Kontrollü atama ('value' atanan değeri temsil eder)
            if (value < 0) notu = 0;
            else if (value > 100) notu = 100;
            else notu = value;
        }
    }
}`
      },
      {
        title: "Yapıcı (Constructor) Metotlar ve 'this' ile Zincirleme",
        content: "Nesne 'new' ile yaratıldığı anda otomatik çalışan ilk metottur. Sınıf ile AYNI İSİMDE olmak zorundadır ve geri dönüş tipi YOKTUR. Aşırı yüklenebilirler. 'this' anahtar kelimesi ile bir yapıcı metot içinden aynı sınıfın başka bir yapıcı metodu çağrılabilir (Constructor Chaining).",
        code: `class Kullanici {
    public string Ad;
    public int Yas;

    // 1. Yapıcı
    public Kullanici(string ad, int yas) {
        Ad = ad;
        Yas = yas;
    }

    // 2. Yapıcı ('this' ile 1. yapıcıyı çağırır)
    public Kullanici() : this("Misafir", 18) {
        Console.WriteLine("Varsayılan değerler atandı.");
    }
}`
      },
      {
        title: "Yıkıcı (Destructor) Metotlar ve IDisposable",
        content: "Nesnenin bellekteki ömrü dolduğunda ve Garbage Collector (Çöp Toplayıcı) tarafından bellekten silinmeden hemen önce çalışan metottur. Başına tilda (~) işareti alır. Parametre almaz ve erişim belirleyici kullanılmaz. Dosya, veritabanı bağlantısı gibi yönetilmeyen kaynakları manuel serbest bırakmak için ise 'IDisposable' arayüzü ve 'Dispose()' metodu tercih edilir.",
        code: `class DosyaIslemi : IDisposable {
    public DosyaIslemi() { Console.WriteLine("Dosya açıldı."); }

    // Yıkıcı (Destructor)
    ~DosyaIslemi() {
        Console.WriteLine("Yıkıcı metot çalıştı, nesne siliniyor.");
    }

    // IDisposable arayüzünden gelen Dispose metodu
    public void Dispose() {
        Console.WriteLine("Kaynaklar manuel olarak serbest bırakıldı.");
        GC.SuppressFinalize(this); // Yıkıcının tekrar çalışmasını engeller
    }
}`
      },
      {
        title: "Statik (static) Sınıflar, Üyeler ve Yapıcılar",
        content: "Statik üyeler nesneye değil, doğrudan SINIFIN KENDİSİNE aittir. Statik üyelere erişmek için nesne oluşturmaya (new) gerek yoktur.",
        list: [
          "Statik Değişken/Metot: SınıfAdı.UyeAdı şeklinde erişilir. Statik metotlar içerisinden sadece diğer statik üyelere erişilebilir.",
          "Statik Yapıcı Metot: Sınıf ilk kullanıldığında veya ilk nesne yaratıldığında SADECE BİR KEZ çalışır. Parametre almaz, erişim belirleyici (public vb.) almaz.",
          "Statik Sınıf: Tamamen 'static' olarak tanımlanırsa, o sınıftan nesne üretilemez ve içindeki tüm üyeler static olmak zorundadır."
        ],
        code: `static class MatematikAraclari {
    public static double PI = 3.14159;

    // Statik Yapıcı (Sadece 1 kez çalışır)
    static MatematikAraclari() {
        Console.WriteLine("Matematik araçları başlatıldı.");
    }

    public static double KareAl(double sayi) {
        return sayi * sayi;
    }
}

// Kullanımı (Nesne üretilmez!)
double alan = MatematikAraclari.PI * MatematikAraclari.KareAl(5);`
      },
      {
        title: "Kapsamlı Örnek: Banka Hesabı (Tüm Konuların Birleşimi)",
        content: "Kapsülleme, constructor, statik değişkenler ve iş kurallarının bir arada kullanıldığı kapsamlı bir C# sınıf tasarımı.",
        code: `class BankaHesabi {
    // Statik değişken: Tüm hesaplar için ortak sayaç
    private static int sonHesapNo = 1000;

    // Private alanlar
    private int hesapNo;
    private string hesapSahibi;
    private double bakiye;

    // Properties (Kapsülleme)
    public int HesapNo { get { return hesapNo; } } // Salt okunur (Sadece Get)
    public string HesapSahibi { get { return hesapSahibi; } set { hesapSahibi = value; } }
    public double Bakiye { get { return bakiye; } } // Salt okunur, dışarıdan değiştirilemez

    // Constructor
    public BankaHesabi(string sahip, double ilkBakiye) {
        hesapNo = ++sonHesapNo; // Her yeni nesnede hesap no 1 artar
        hesapSahibi = sahip;
        
        if (ilkBakiye < 0) bakiye = 0;
        else bakiye = ilkBakiye;
    }

    // Para Yatırma Metodu
    public void ParaYatir(double miktar) {
        if (miktar > 0) {
            bakiye += miktar;
            Console.WriteLine($"{miktar} TL yatırıldı. Yeni bakiye: {bakiye}");
        } else {
            Console.WriteLine("Geçersiz miktar!");
        }
    }

    // Para Çekme Metodu
    public void ParaCek(double miktar) {
        if (miktar > 0 && miktar <= bakiye) {
            bakiye -= miktar;
            Console.WriteLine($"{miktar} TL çekildi. Kalan bakiye: {bakiye}");
        } else {
            Console.WriteLine("Yetersiz bakiye veya geçersiz miktar!");
        }
    }

    // Bilgi Yazdırma Metodu
    public void HesapOzeti() {
        Console.WriteLine($"Hesap No: {HesapNo}, Sahip: {HesapSahibi}, Bakiye: {Bakiye} TL");
    }
}`
      }
    ]
  }
];
