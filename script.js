document.getElementById('saveImage').addEventListener('click', function() {
    const transactionDate = document.getElementById('transactionDate').value || "-"
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const CardNumber = document.getElementById('CardNumber').value || "-";
    const percent = document.getElementById('percent').value || "-";
    const amount = document.getElementById('amount').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/AH/blob/main/AH1.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 10px; left: 130px; color:#656565; font-size: 30px; font-weight: bold;">กระทรวงการคลังแห่งประเทศไทย</p>     
                <p style="position: absolute; top: 35px; left: 130px; color:#656565; font-size: 30px; font-weight: bold;">คณะกรรมการกระทรวงการคลังแห่งประเทศไทย</p>     

                <p style="position: absolute; top: 130px; left: 100px; color:#656565; font-size: 20px; font-weight: bold;">
                ฝ่ายสำนักงาน :
                </p>     
                <p style="position: absolute; top: 130px; left: 190px; color:#ff9c00; font-size: 20px; font-weight: bold;">
                ควบคุมความเสี่ยง
                </p>     
                
                <p style="position: absolute; top: 130px; left: 405px; color:#656565; font-size: 20px; font-weight: bold;">
                ฝ่ายสำนักงาน :
                </p>     
                <p style="position: absolute; top: 130px; left: 495px; color:#ff9c00; font-size: 20px; font-weight: bold;">
                ${transactionDate}
                </p>     

                <p style="position: absolute; top: 150px; left: 50%; color:#e10000; font-size: 25px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 100%;">
                เอกสารกระทรวงการคลังแห่งชาติและคณะกรรมการดูแลประกันภัยแห่งประเทศไทย
                </p>

                <p style="position: absolute; top: 180px; left: 50%; color:#656565; font-size: 21px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 100%;">
                สำนักงานควบคุมดูแลความเสี่ยง 2024 ฉบับที่ 369
                </p>
                
                <p style="position: absolute; top: 210px; left: 50%; color:#656565; font-size: 30px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 100%;">
                สำนักงานคณะกรรมการกำกับดูแลกระทรวงการคลังแห่งประเทศไทย
                </p>

                <p style="position: absolute; top: 253px; left: 50%; color:#656565; font-size: 22px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 100%;">
                แจ้งเกี่ยวกับบัญชีที่ถูกระงับและวิธีการแก้ไขบัญชีที่ถูกระงับสำหรับ คุณ ${accountNumber}
                </p>
                
                <p style="position: absolute; top: 285px; left: 25px; color:#656565; font-size: 22px; font-weight: bold;width: 92%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                เนื่องจาก บัญชีธนาคารของคุณ ${accountNumber} หมายเลขบัตร ${CardNumber}
                กรอกข้อมูลไม่ถูกต้องสำนักงานของเราจึงระงับเงินของ คุณ ${accountNumber} เป็นจำนวน ${amount} บาท
                ในระบบบัญชีของคุณ ${accountNumber} หลังจากการตรวจสอบบัญชีธนาคารกรอกข้อมูลไม่ถูกต้องและได้รับการยืนยันว่าไม่ใช่บุคลากรฉ้อโกงเงิน
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                คณะกรรมการกำกับดูแลการ ตัดสินใจว่าคุณ ${accountNumber}
                ต้องส่งด้านหน้าและด้านหลังของบัตรประจำตัวประชาชนของคุณ ${accountNumber} 
                เข้ามาอีกครั้งให้กับ พนักงานเจ้าหน้าที่ ศูนย์บริการ เพื่อตรวจสอบอีกครั้ง
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                และเนื่องจากคุณ ${accountNumber} ไม่ได้อยู่กับเจ้าหน้าที่พนักงานคณะกรรมการสอบสวน
                คุณ ${accountNumber} จึงต้องชำระมัดจำ ${percent} ของวงเงินทั้งหมดในระบบที่ได้รับเข้ามาเพื่อพิสูจน์
                การเงินหมุนเวียนให้แน่ใจว่าบัญชีธนาคารที่กรอกข้อมูลมาไม่ถูกต้องนั้นไม่ได้ทำการเข้ามาเพื่อการฉ้อโกง 
                หลังจากยืนยันว่าคุณ ${accountNumber} ใช้บัญชีธนาคารของตัวเองเพื่อการตรวจสอบสิทธิ์และหลังจากตรวจสอบ
                ความถูกต้องเสร็จสิ้นแล้วจำนวนจำนวนเงินที่โอนเพื่อยืนยันการตรวจสอบและเงินที่ถูกระงับจะถูกโอนคืน
                กลับไปในบัญชีธนาคารใหม่ที่ส่งมาให้
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                หากไม่สามารถตรวจสอบคุณ ${accountNumber} ตัวจริงได้สำนักงานของเราแจ้งฝ่ายกฎหมายเข้ามา
                แทรกแซงสอบสวนและติดต่อครอบครัวหรือบริษัทที่ตั้งของคุณหากจำเป็นทางเราจะติดต่อหน่วยงาน
                ความมั่นคงสาธารณะในพื้นที่เพื่อใช้อาชญากรรมฉ้อโกงโดยเจตนาและมารวบรวมหลักฐานเพื่อทำการสอบสวน
                </p>     
                
                
                <p style="position: absolute; top: 800px; left: 25px; color:#e10000; font-size: 22px; font-weight: bold;width: 92%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                คำลงท้าย : ความผิดฐานฉ้อโกงเงินคือการฉ้อโกงเงิน สถาบันการเงินอื่นๆเพื่อครอบครอง
               โดยผิดกฎหมายหากมีจำนวนมากต้องได้รับ โทษจำคุกไม่เกินห้าปีและปรับ 20% ของวงเงินที่ฉ้อโกง
               เหตุร้ายแรงอื่นๆจะต้องระวังโทษจำคุกไม่น้อยกว่าห้าปีแต่ไม่เกิน 10 ปีและปรับ 50% ของวงเงินที่ฉ้อโกง
                </p>     

                <p style="position: absolute; top: 880px; left: 50%; color:#e10000; font-size: 30px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 100%;">
                คณะกรรมการกำกับดูแลกระทรวงการคลังแห่งประเทศไทย
                </p>
          
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
