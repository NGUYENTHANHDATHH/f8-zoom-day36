
function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;
    const number = totalPages;


    return (
        <div className="pagination"
            style={{ marginTop: "20px", display: "flex", gap: "8px" }}>
            {/* First */}
            <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
            >
                First
            </button>

            {/* Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
            >
                Previous
            </button>
            {Array(number).fill().map((page, index) => {
                const number = index + 1;
                return (
                    <button
                        key={number}
                        onClick={() => onPageChange(number)}
                        disabled={number === currentPage}
                        style={{
                            fontWeight: number === currentPage ? "bold" : "normal",
                            background: number === currentPage ? "#007bff" : "transparent",
                            color: number === currentPage ? "#fff" : "#000",
                            cursor: number === currentPage ? "default" : "pointer",
                            padding: "4px 8px",
                            borderRadius: "4px",
                        }}
                    >
                        {number}
                    </button>
                )
            })}

            {/* Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
            >
                Next
            </button>

            {/* Last */}
            <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
            >
                Last
            </button>

            {/* Hiển thị text "Page X of Y" */}
            <span style={{ marginLeft: "12px" }}>
                Page {currentPage} of {totalPages}
            </span>
        </div>
    );
}

export default Pagination;
