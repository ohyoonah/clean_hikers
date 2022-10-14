const paging =  (page, totalPost) => {
    const maxPost = 10; // 한 페이지의 게시물 량
    const maxPage = 10; // 총 보여줄 페이지 량 > 나중에 데이터 보고 수정
    let currentPage = page ? parseInt(page) : 1; // 현재 페이지
    const hidePost = page === 1 ? 0 : (page - 1) * maxPost; // 
    const totalPage = Math.ceil(totalPost / maxPost); // (5)
    
    if (currentPage > totalPage) { // (6)
      currentPage = totalPage;
    }
  
    const startPage = Math.floor(((currentPage - 1) / maxPage)) * maxPage + 1; // (7)
    let endPage = startPage + maxPage - 1; // (8)
  
    if (endPage > totalPage) { // (9)
      endPage = totalPage;
    }
  
    return { startPage, endPage, hidePost, maxPost, totalPage, currentPage }; // (10)
  };
  

export {paging}