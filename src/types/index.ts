export type ProductListProps = {
    children: React.ReactNode;
};

export interface ProductListComponentProps extends ProductListProps {
    href: string
}

export interface Product_Dashboard extends ProductListComponentProps {
    title: string;
  };