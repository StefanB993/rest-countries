import { useState } from "react";
import { useCountries } from "../../contexts/CountriesContext";
import ReactPaginate from "react-paginate";
import CountriesContainer from "../CountriesContainer/CountriesContainer";
import styles from "./Pagination.module.scss";

function Pagination() {
  const { itemsPerPage, filtered } = useCountries();
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = filtered.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filtered.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filtered.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <CountriesContainer countries={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={null}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={null}
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        pageLinkClassName={styles.pagination__item}
        activeLinkClassName={styles.pagination__active}
      />
    </>
  );
}

export default Pagination;
