import data from "../semi.json" assert{type:"json"}
var iu=document.getElementById("vo1")
var content="";
data.forEach(function(bo){
  content+=/*html*/`
<div class="w-[1355px] md:ml-0 ml-10 mx-auto">
    <div class="md:w-[1355px] w-[444px] md:ml-0 -ml-3 h-16 grid grid-cols-10 gap-2 bg-red-600">
      <div class="md:col-span-1 col-span-2">
        <img class="float-right mt-[2px]" src="img_test_thi/anhhtus-logo 2.png" alt="">
      </div>
      <div class="md:col-span-5 col-span-7 ml-3">
        <input class=" w-full h-[34px] mt-[14px] rounded-lg" type="text" placeholder="Tìm kiếm ?">
      </div>
      <div class="col-span-4 text-sm text-white md:grid grid-cols-4 hidden">
        <div class=" col-span-1 ml-3">
          <p class="mt-2">Gọi mua hàng</p>
          <p class="">1800.2044</p>
        </div>
        <div class="flex space-x-2 col-span-1 text-white text-sm">
          <img class="my-auto" src="img_test_thi/Frame.png" alt="">
          <div class="ml-1">
            <p class="mt-2">Cửa hàng</p>
            <p class="">gần bạn</p>
          </div>
        </div>
        <div class="flex space-x-2 col-span-1 text-white text-sm">
          <img class="my-auto" src="img_test_thi/Frame-1.png" alt="">
          <div class="ml-1">
            <p class="mt-2">Tra cứu</p>
            <p class="">đơn hàng</p>
          </div>
        </div>
        <div class="flex space-x-2 col-span-1 text-white text-sm">
          <img class="my-auto" src="img_test_thi/Frame-2.png" alt="">
          <div class="ml-1">
            <p class="mt-2">Giỏ</p>
            <p class="">hàng</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex space-x-8 ml-4 h-[30px] md:w-[1355px] w-[444px] md:text-base text-xs my-auto">
      <p class=" mt-1">Trang chủ</p>
      <p class=" mt-1">Điện thoại</p>
      <p class=" mt-1">Samsung</p>
      <p class=" mt-1">Samsung Galaxy A73 (5G) 256GB</p>
    </div>
    <hr>
    <div class="text-lg my-auto ml-8">Samsung Galaxy A73 (5G) 256GB</div>
    <hr>
    <div class="md:w-[1355px] w-[444px] mt-8 md:grid grid-cols-3 gap-10">
      <div class="col-span-1">
        <a href="../hi/ode.html?id=${bo.id}"><img class="hover:scale-90 transition" src="img_test_thi/Rectangle.png" alt=""></a>
        <div class="flex space-x-3">
          <div class="border w-[60px] h-[60px] boder-gray-400 rounded-lg">
            <img class="mx-auto" src="img_test_thi/Rectangle-1.png" alt="">
            <p class="text-xs text-center">Tình năng</p>
            <p class="text-xs text-center">nổi bật</p>
          </div>
          <div class="border border-gray-400 w-[60px] h-[60px] rounded-lg">
            <img class="w-12 h-12 mt-1 ml-1" src="img_test_thi/Rectangle-2.png" alt="">
          </div>
          <div class="border border-gray-400 w-[60px] h-[60px] rounded-lg">
            <img class="w-12 h-12 mt-1 ml-1" src="img_test_thi/Rectangle-3.png" alt="">
          </div>
          <div class="border border-gray-400 w-[60px] h-[60px] rounded-lg">
            <img class="w-12 h-12 mt-1 ml-1" src="img_test_thi/Rectangle-4.png" alt="">
          </div>
          <div class="border border-gray-400 w-[60px] h-[60px] rounded-lg">
            <img class="w-12 h-12 mt-1 ml-1" src="img_test_thi/Rectangle-5.png" alt="">
          </div>
        </div>
      </div>
      <div class="col-span-1 text-sm">
        <p class="text-lg mb-7 text-red-500">11.690.000 ₫ <span class="text-sm text-gray ml-3">12.990.000 ₫</span></p>
        <p class="mb-2">Chọn màu để xem giá và chi nhánh có hàng</p>
        <div class="flex mb-5 space-x-2">
          <div class="w-[127px] h-[52px] border border-gray-400 rounded-lg">
            <p class="mt-2 ml-2 text-xs">Trắng</p>
            <p class="ml-2 text-xs">11.690.000 ₫</p>
          </div>
          <div class="w-[127px] h-[52px] flex space-x-2 border border-gray-400 rounded-lg">
            <img class="my-auto ml-1" src="img_test_thi/Rectangle-6.png" alt="">
            <div class="">
              <p class="mt-2 ml-2 text-xs">Xám</p>
              <p class="ml-2 text-xs">11.690.000 ₫</p>
            </div>
          </div>
          <div class="w-[127px] h-[52px] flex space-x-2 border border-gray-400 rounded-lg">
            <img class="my-auto ml-1" src="img_test_thi/Rectangle-7.png" alt="">
            <div class="">
              <p class="mt-2 ml-2 text-xs">Xám</p>
              <p class="ml-2 text-xs">11.690.000 ₫</p>
            </div>
          </div>
        </div>
        <div class="w-[400px] h-[232px] border border-gray-400 rounded-lg">
          <div class="w-[398px] h-[42px] flex space-x-1 bg-red-100 rounded-lg">
            <img class="ml-3 my-auto" src="img_test_thi/gift.png" alt="">
            <p class="text-base text-red-600 pt-2">Khuyến Mãi</p>
          </div>
          <div class="ml-2 mt-[10px]">
            <p class="mb-2">Combo 02 Mã ưu đãi CGV trị giá 200.000đ <span class="text-red-600">(xem chi tiết)</span></p>
            <p class="mb-2">Tặng gói bảo hành Samsung Care+ 12 tháng trị giá 1.099.000đ (Từ 01/06-15/06) <span class="text-red-600">(xem chi tiết)</span></p>
            <p class="mb-2">Giảm thêm 1.500.000đ khi thu cũ đổi mới <span class="text-red-600">(xem chi tiết)</span></p>
            <p class="mb-2">Nhận thêm khuyến mãi sau:</p>
            <p class="mb-2 ml-3">Thu cũ đổi mới - Trợ giá đến 300.000đ <span class="text-red-600">(xem chi tiết)</span></p>
          </div>
        </div>
        <div class="mt-5 mb-[11px] flex space-x-3 text-white">
          <div class="w-[195px] h-[56px] bg-blue-600 rounded-lg">
            <p class="text-base text-center mt-1">TRẢ GÓP</p>
            <p class="text-sm text-center">(Xét duyệt qua điện thoại)</p>
          </div>
          <div class="w-[195px] h-[56px] bg-blue-600 rounded-lg">
            <p class="text-base text-center mt-1">TRẢ GÓP</p>
            <p class="text-sm text-center">(Xét duyệt qua điện thoại)</p>
          </div>
        </div>
        <div class="w-[400px] h-[430px] text-sm border border-gray-400 rounded-lg">
          <div class="w-[398px] h-10 bg-gray-200 rounded-lg">
            <p class="text-base pt-2 ml-3">Ưu đãi thêm</p>
          </div>
          <div class="ml-2 mt-5">
            <p class="mb-5">Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)</p>
            <div class="flex space-x-2 mb-2">
              <img src="img_test_thi/Rectangle-8.png" alt="">
              <p>Mở thẻ tín dụng Citibank - Nhận e-voucher tới 2 triệu</p>
            </div>
            <img class="mb-2" src="img_test_thi/Rectangle-9.png" alt="">
            <p class="mb-2">Nhập mã KVCPS - Giảm thêm 5% (tối đa 250.000đ) khi thanh toán qua Kredivo cho đơn hàng từ 500.000đ</p>
            <img class="mb-2" src="img_test_thi/Rectangle-10.png" alt="">
            <p class="mb-2">Nhập mã MOCACPS - Giảm thêm 5% (tối đa 400.000đ) khi thanh toán qua ví Moca cho đơn hàng từ 500.000đ</p>
            <img class="mb-2" src="img_test_thi/Rectangle-11.png" alt="">
            <p class="mb-2">Nhập QRCPS giảm đến 300.000đ áp dụng các đơn hàng từ 4 triệu trở lên khi thanh toán qua VNPAY tại cửa hàng</p>
            <img class="mb-2" src="img_test_thi/Rectangle-12.png" alt="">
            <p class="mb-2">Giảm thêm 500.000đ khi thanh toán qua thẻ tín dụng VP Bank cho đơn hàng từ 10 triệu</p>
          </div>
        </div>

      </div>
      <div class="col-span-1  w-[400px]">
        <p class="text-lg mb-[11px]">Thông số kỹ thuật</p>
        <div class="flex mb-1 bg-gray-200"><p class="w-[77px] ml-3 my-auto">Kích thước màn hình</p> <p class="ml-10 my-auto">6.7 inches</p></div>
        <div class="flex mb-1"><p class="w-[77px] ml-3 my-auto"> Công nghệ màn hình</p><p class="ml-10 my-auto">Super AMOLED </p></div>
        <div class="flex mb-1 bg-gray-200">
          <p class="w-[90px] ml-3 my-auto">Camera sau</p>
           <div class="ml-10 my-auto">
            <p class=""> Camera chính: 108 MP, f/1.8, PDAF, OIS</p>
            <p class=""> Camera gó siêu rộng: 12 MP, f/2.2</p>
            <p class=""> Camera macro: 5 MP, f/2.4</p>
            <p class="">Camera chân dung: 5 MP, f/2.4 </p>
           </div>
        </div>
        <div class="flex mb-1 bg-gray-200"><p class="w-[77px] ml-3 my-auto">Camera trước </p><p class="ml-10 my-auto"> 32 MP, f/2.2</p></div>
        <div class="flex mb-1 "><p class="w-[77px] ml-3 my-auto"> Chipset</p><p class="ml-10 my-auto"> Snapdragon 778G 5G 8 nhân</p></div>
        <div class="flex mb-1 bg-gray-200"><p class="w-[77px] ml-3 my-auto">Dung lượng RAM </p><p class="ml-10 my-auto">8 GB </p></div>
        <div class="flex mb-1 "><p class="w-[77px] ml-3 my-auto"> Bộ nhớ trong</p><p class="ml-10 my-auto"> 256 GB</p></div>
        <div class="flex mb-1 bg-gray-200"><p class="w-[77px] ml-3 my-auto">Pin </p><p class="ml-10 my-auto">5000 mAh </p></div>
        <div class="flex mb-1 "><p class="w-[77px] ml-3 my-auto">Thẻ SIM </p><p class="ml-10 my-auto">2 SIM (Nano-SIM) </p></div>
        <div class="flex mb-1 bg-gray-200"><p class="w-[77px] ml-3 my-auto"> Hệ điều hành</p><p class="ml-10 my-auto">Android 12, One UI 4.1 </p></div>
        <div class="flex mb-1 "><p class="w-[77px] ml-3 my-auto">Độ phân giải màn hình </p><p class="ml-10 my-auto">1080 x 2400 pixels (FullHD+) </p></div>
        <div class="flex mb-1 bg-gray-200"><p class="w-[100px] ml-3 my-auto">Tính năng màn hình </p><p class="ml-10 my-auto">Tần số quét 120 Hz, Kính cường lực Corning Gorilla Glass 5 </p></div>
        <div class="flex mb-1 "><p class="w-[77px] ml-3 my-auto"> Loại CPU</p><p class="ml-10 my-auto">Octa-core (2.4 GHz & 1.8 GHz) </p></div>
        <div class="flex mb-1 bg-gray-200"><p class="w-[77px] ml-3 my-auto">Trọng lượng </p><p class="ml-10 my-auto"> 181 g</p></div>
        <div class="flex mb-1 "><p class="w-[77px] ml-3 my-auto">Bluetooth </p><p class="ml-10 my-auto">v5.0 </p></div>
        <div class="w-[400px] h-[34px] bg-gray-300 text-gray-700 rounded-lg hover:bg-green-500 hover:text-white">
          <p class="text-base text-center pt-1">Xem cấu hình chi tiết</p>
        </div>
      </div>
    </div>
    <div class=""></div>
  </div>
  `
})
iu.innerHTML=content;