import fs from "fs";
import path from "path";

const ordersFile = path.join(process.cwd(), "data", "orders.json");

// Ensure data directory exists
const initializeOrdersFile = () => {
  const dir = path.dirname(ordersFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(ordersFile)) {
    fs.writeFileSync(ordersFile, JSON.stringify([]));
  }
};

export interface Order {
  id: string; // Razorpay order id
  name: string;
  email: string;
  phone: string;
  city: string;
  condition: string;
  livingSituation: string;
  dischargeTimeline: string;
  paymentId?: string;
  status: "created" | "paid";
  createdAt: string;
}

export const saveOrder = (order: Order) => {
  initializeOrdersFile();
  const fileContent = fs.readFileSync(ordersFile, "utf-8");
  const orders: Order[] = JSON.parse(fileContent);
  orders.push(order);
  fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
};

export const updateOrderStatus = (orderId: string, paymentId: string): Order | null => {
  initializeOrdersFile();
  const fileContent = fs.readFileSync(ordersFile, "utf-8");
  const orders: Order[] = JSON.parse(fileContent);
  const orderIndex = orders.findIndex((o) => o.id === orderId);
  if (orderIndex !== -1) {
    orders[orderIndex].status = "paid";
    orders[orderIndex].paymentId = paymentId;
    fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
    return orders[orderIndex];
  }
  return null;
};
