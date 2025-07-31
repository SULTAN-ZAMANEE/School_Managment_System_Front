import React, {useState} from "react";

// Pagination Component
export default PaginationComponent = ({ 
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showFirst = true,
  showLast = true,
  maxVisible = 5,
  size = 'md',
  className = '',
  ...props 
}) => {
  const sizeClass = size !== 'md' ? `pagination-${size}` : '';
  
  const getVisiblePages = () => {
    const pages = [];
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  return (
    <nav className={className} {...props}>
      <ul className={`pagination ${sizeClass}`}>
        {showFirst && (
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(1)}>
              الأول
            </button>
          </li>
        )}
        
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
            السابق
          </button>
        </li>
        
        {getVisiblePages().map(page => (
          <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
            التالي
          </button>
        </li>
        
        {showLast && (
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(totalPages)}>
              الأخير
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};