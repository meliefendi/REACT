//REACT.MEMO reactın performansını arttıran yüksek düzey bileşendir. bu bileşen propslarındaki değişikliklerin oluştuğu durumları tesbit eder ve bileşenin render edilip 
//edilmemesine karar verir.yani kısaca sayfa içerisindeki render edilmesi gerekmeyen kısmın render edeilmemesi için oluşturulan yapıdır. bu yapıyı ilgili sayfaya import
//edilmesi gerekli yani bu olayın gerçekleşeceği sayfaya
import React from "react";

function Header({ count }) {
    console.log("header render edildi")
    return (
        <div>
            <h1> Header</h1>
           {count}
            <hr />
        </div>
    )
}

export default React.memo(Header);