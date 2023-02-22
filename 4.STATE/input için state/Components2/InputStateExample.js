import { useState } from "react";


function InputStateExample() {
    // yöntem 1
    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("")

    // Yöntem 2
    // const onChangeName = (event) => setName(event.target.value);
    // const onChangeSurname = (event) => setSurname (event.target.value);

    //Yöntem 3
    // const onChangeInput = (event) =>  (event.target.value);

    // Yöntem 4
    const [form, setForm] = useState({name:"", surname:""});

    const onChangeFormInput = (e) => {setForm ({...form, [e.target.name]:e.target.value});
};
    return <div>

        name: <br />
        {/* Yöntem 1 */}
        {/* <input value={name} onChange={(event) => setName(event.target.value)} /> */}

          {/* Yöntem 2 */}
          {/* <input value={name} onChange={onChangeName} /> */}

          {/* Yöntem 3 */}
          {/* <input value={name} onChange={onChangeInput} /> */}

           {/* Yöntem 4 */}
           <input name="name" value={form.name} onChange={onChangeFormInput} />
          <br />


        surname: <br />
         {/* Yöntem 1 */}
        {/* <input value={surname} onChange={(event) => setName(event.target.value)} /> */}

         {/* Yöntem 2 */}
         {/* <input value={surname} onChange={onChangeSurname} /> */}

          {/* Yöntem 3 */}
          {/* <input value={surname} onChange={onChangeInput} /> */}

           {/* Yöntem 4 */}
           <input name="surname" value={form.surname} onChange={onChangeFormInput} />
          <br />


      <br /><br /><br />
       {form.name} {form.surname}
    </div>
}

export default InputStateExample;

//1 EN TEMEL YÖNTEM NORMAL STATE KURULUMU DİĞERİNDE "ONCLİCK" VARLEN BU KISIMDA YANİ BU KONUDA "ONCHANGE" KULLANILMAKTA. HER BİR İNPUT İÇİN AYRI STATELER AÇILDI.

//2 BU YÖNTEMDE İSE FONKSİYON KULLANILDI VE EVENT İÇERİSİNE YANİ ONCHANGE İÇERİSİNE BU FONKSİYON VERİLDİ. YİNE 2 TANE İNPUT İÇİN 2 AYRI ŞEY YAPILDI. AMA DAHA TEMİZ.

//3 BU YÖNTEMDE 2.YÖNTEM GİBİ YAPILDI FAKAT BUNDA TEK FONKSİYONLA 2 AYRI EVENTLE DE ETKİLEŞİM KURDUK.

//4 BU YÖNTEMDE 2 VE 3. YÖNTEMLER GİBİ TEK FONKSİYON ÜZERİNDEN EVENTLERİ YÖNETTİK AMA BURADA ÖZELLİK TANIMLADIK. EVENTLER ARASINDA NAME ÖZELLİĞİNE SAHİP OLANLARI 
SEÇTİK. YANİ ATTRİBUT'U NAME OLANLARI.AYRICA BUNU DA TEK STATE İLE TANIMLADIK VE FONKSİYONLA EVENTLERİ YÖNETTİK.
