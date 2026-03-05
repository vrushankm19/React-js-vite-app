export interface CartItem {
  id: string;
  title: string;
  price: number;
  stockQuantity: number;
  cartQuantity: number;
  minQuantity: number;
  maxQuantity: number;
}