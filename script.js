const clubs = [
  {
    name: 'CLB Bóng đá',
    desc: 'Rèn luyện kỹ thuật, chiến thuật và tham gia giải phong trào.',
    img: 'pic/bong_da.jpg',
    tag: 'Thể thao',
    url: 'web_clb/clb-bong-da.html'
  },
  {
    name: 'CLB Bóng rổ',
    desc: 'Nâng cao kỹ năng dắt bóng, ném rổ và phối hợp đồng đội.',
    img: 'pic/bong_ro.jpg',
    tag: 'Thể thao',
    url: 'web_clb/clb-bong-ro.html'
  },
  {
    name: 'CLB Cầu lông',
    desc: 'Luyện tập sức bền, phản xạ và thi đấu nội bộ.',
    img: 'pic/cau_long.jpg',
    tag: 'Thể thao',
    url: 'web_clb/clb-cau-long.html'
  },
  {
    name: 'CLB Nhiếp ảnh',
    desc: 'Chụp ảnh sáng tạo, hậu kỳ, triển lãm ảnh trường.',
    img: 'pic/nhiep_anh.jpg',
    tag: 'Sáng tạo',
    url: 'web_clb/clb-nhiep-anh.html'
  },
  {
    name: 'CLB Mỹ thuật',
    desc: 'Vẽ tranh, trang trí sự kiện và tham gia cuộc thi mỹ thuật.',
    img: 'pic/my_thuat.jpg',
    tag: 'Nghệ thuật',
    url: 'web_clb/clb-my-thuat.html'
  },
  {
    name: 'CLB Nghệ thuật biểu diễn',
    desc: 'Hát, kịch, nhảy múa và biểu diễn văn nghệ.',
    img: 'pic/nghe_thuat.jpg',
    tag: 'Nghệ thuật',
    url: 'web_clb/clb-nghe-thuat.html'
  },
  {
    name: 'CLB Sách & Phim',
    desc: 'Câu lạc bộ đọc sách, thảo luận và review phim ảnh.',
    img: 'pic/sach_va_phim.jpg',
    tag: 'Văn hóa',
    url: 'web_clb/clb-sach-phim.html'
  },
  {
    name: 'CLB Truyền thông',
    desc: 'Podcast, radio nội bộ, sản xuất video và MC sự kiện.',
    img: 'pic/hongai_radio.jpg',
    tag: 'Truyền thông',
    url: 'web_clb/clb-truyen-thong.html'
  }
];

/* ===== RENDER CARD ===== */
const grid = document.getElementById('clubs');

if (grid) {
  clubs.forEach((club, idx) => {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <img src="${club.img}" alt="${club.name}"
        onerror="this.src='https://via.placeholder.com/400x220?text=CLB';" />
      <h3>${club.name}</h3>
      <p>${club.desc}</p>
      <div class="tag">${club.tag}</div>
    `;

    // 👉 chuyển trang (không mở tab mới)
    card.addEventListener('click', () => {
      window.location.href = club.url;
    });

    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), 120 * idx);
  });
}

/* ===== FORM HANDLER (GIỮ NGUYÊN LOGIC XỊN) ===== */
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // ❗ giữ nguyên - không reload

    const formData = new FormData(this);
    let summary = "";

    formData.forEach((value, key) => {
      const inputElement =
        this.querySelector(`[name="${key}"]`) ||
        Array.from(this.elements).find(el =>
          el.placeholder && (el.name === key || el.type !== 'submit')
        );

      const label = inputElement && inputElement.placeholder
        ? inputElement.placeholder
        : "Thông tin";

      summary += `- ${label}: ${value}\n`;
    });

    alert(
      "🎉 Chúc mừng! Bạn đã nộp đơn đăng ký thành công.\n\n" +
      "Nội dung bạn đã gửi:\n" +
      summary +
      "\nBan chủ nhiệm sẽ liên hệ với bạn sớm nhất!"
    );

    this.reset();
  });
});