import classNames from 'classnames';
import { useRouter } from 'next/router';
import { DOTS, usePagination } from '../../hooks/Pagination/usePagination';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const router = useRouter();
  const catId = Number(useRouter().query.category);

  const routerNavigate = (path) => {
    router.push(path);
  };

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  // console.log(lastPage);
  // console.log(currentPage);
  return (
    <div className="pagination">
      {/* {currentPage !== 1} */}
      {/* <svg
        className={currentPage <= 1 ? 'disabled' : ''}
        onClick={onPrevious}
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.310157 10.665L11.6748 19.9549C11.7045 19.9794 11.7402 19.9946 11.7778 19.9988C11.8153 20.003 11.8533 19.996 11.8872 19.9787C11.9212 19.9613 11.9498 19.9343 11.9697 19.9007C11.9897 19.8671 12.0002 19.8283 12 19.7887L12 17.7492C12 17.6199 11.942 17.4959 11.8462 17.4168L2.77065 10.0001L11.8462 2.58346C11.9445 2.50431 12 2.3803 12 2.25101L12 0.211502C12 0.0347271 11.8059 -0.0628948 11.6748 0.0452804L0.310157 9.33522C0.213564 9.41408 0.135426 9.51495 0.0816803 9.63016C0.0279359 9.74538 8.85427e-07 9.8719 8.74218e-07 10.0001C8.6301e-07 10.1283 0.0279359 10.2548 0.0816802 10.3701C0.135425 10.4853 0.213564 10.5861 0.310157 10.665Z"
          fill="black"
          fillOpacity="0.85"
        />
      </svg> */}

      <ul
        className={classNames('pagination_container', {
          [className]: className,
        })}
      >
        {paginationRange.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination_item dots" key={index}></li>;
          }

          return (
            <li
              key={index}
              className={classNames('pagination_item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => {
                onPageChange(pageNumber);
                routerNavigate(`/catalog?category=${catId}&page=${pageNumber}`);
              }}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>

      {/* <svg
        className={currentPage === lastPage ? 'disabled' : ''}
        onClick={onNext}
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6898 9.335L0.32521 0.0450593C0.295514 0.0205909 0.259825 0.00538495 0.222244 0.00118745C0.184662 -0.00301006 0.146712 0.0039712 0.112751 0.0213296C0.0787894 0.038688 0.0501953 0.0657196 0.0302514 0.0993197C0.0103075 0.13292 -0.000177005 0.171726 2.26089e-06 0.211281V2.25079C2.26089e-06 2.38008 0.0579852 2.50408 0.153783 2.58324L9.22935 9.99989L0.153783 17.4165C0.0554642 17.4957 2.26089e-06 17.6197 2.26089e-06 17.749V19.7885C2.26089e-06 19.9653 0.194119 20.0629 0.32521 19.9547L11.6898 10.6648C11.7864 10.5859 11.8646 10.485 11.9183 10.3698C11.9721 10.2546 12 10.1281 12 9.99989C12 9.87168 11.9721 9.74516 11.9183 9.62994C11.8646 9.51473 11.7864 9.41386 11.6898 9.335Z"
          fill="black"
          fillOpacity="0.85"
        />
      </svg> */}
      {currentPage !== lastPage && (
        <>
          <span>...</span>
          <div
            className={currentPage === lastPage ? 'disabled' : ''}
            onClick={() => {
              onNext();
              routerNavigate(
                `/catalog?category=${catId}&page=${currentPage + 1}`,
              );
            }}
          >
            Следующая страница
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
