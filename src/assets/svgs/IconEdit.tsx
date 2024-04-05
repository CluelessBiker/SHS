import { SVGProps } from 'react';

const IconEdit = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.07 14.927C4.00176 15.0012 3.94542 15.0856 3.903 15.177C3.892 15.2 3.88 15.22 3.871 15.244C3.86386 15.257 3.85751 15.2703 3.852 15.284L2.052 20.684C2.00196 20.8343 1.98831 20.9943 2.01219 21.1508C2.03608 21.3074 2.0968 21.456 2.18937 21.5845C2.28193 21.713 2.40369 21.8177 2.54463 21.8899C2.68556 21.9622 2.84163 21.9999 3 22C3.10737 21.9999 3.21403 21.9827 3.316 21.949L8.716 20.149C8.729 20.149 8.739 20.136 8.752 20.132C8.765 20.128 8.793 20.111 8.814 20.101C8.90905 20.058 8.99651 20 9.073 19.929C9.083 19.92 9.097 19.917 9.106 19.907L21.706 7.30703C21.8935 7.1195 21.9988 6.86519 21.9988 6.60003C21.9988 6.33487 21.8935 6.08056 21.706 5.89303L18.106 2.29303C17.9185 2.10556 17.6642 2.00024 17.399 2.00024C17.1338 2.00024 16.8795 2.10556 16.692 2.29303L4.092 14.893C4.083 14.9 4.08 14.917 4.07 14.927ZM17.4 4.41403L19.586 6.60003L8.4 17.786L7.307 16.693L6.214 15.6L17.4 4.41403ZM5.237 17.451L5.893 18.107L6.549 18.763L4.581 19.419L5.237 17.451Z"
        fill={props.color ? props.color : '#191919'}
      />
    </svg>
  );
};

export default IconEdit;
