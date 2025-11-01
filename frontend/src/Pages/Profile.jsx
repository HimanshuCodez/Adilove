import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Heart,
  ShoppingBag,
  CreditCard,
  LogOut,
  Edit,
  Gift,
} from "lucide-react";

export default function Profile() {
  const [user] = useState({
    name: "Himanshu Gaur",
    email: "himanshu@febeul.com",
    phone: "+91 98765 43210",
    gender: "Male",
    dob: "10 June 1999",
    address: "Flat 32, Orchid Residency, Mumbai",
  });

  const [orders] = useState([
    { id: "#ORD1023", item: "Lace Babydoll", date: "Oct 28, 2025", status: "Delivered" },
    { id: "#ORD1024", item: "Cotton Panty Pack", date: "Oct 30, 2025", status: "Shipped" },
  ]);

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-200">
        {/* Header Section */}
        <div className="bg-pink-200/70 py-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
              alt="User Avatar"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-pink-300 hover:bg-pink-400 transition text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            <Edit size={16} /> Edit Profile
          </button>
        </div>

        {/* Profile Details */}
        <div className="p-6 grid md:grid-cols-3 gap-6 border-b border-pink-100">
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 text-sm uppercase">Personal Info</h3>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Mail size={16} /> {user.email}
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Phone size={16} /> {user.phone}
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <User size={16} /> {user.gender}
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Gift size={16} /> {user.dob}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 text-sm uppercase">Address</h3>
            <div className="flex items-start gap-2 text-gray-700 text-sm">
              <MapPin size={16} className="mt-1" /> {user.address}
            </div>
            <button className="text-pink-400 text-sm hover:underline">
              + Add New Address
            </button>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 text-sm uppercase">Payment</h3>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <CreditCard size={16} /> **** **** **** 2345
            </div>
            <button className="text-pink-400 text-sm hover:underline">
              + Add Payment Method
            </button>
          </div>
        </div>

        {/* Orders Section */}
        <div className="p-6 border-b border-pink-100">
          <h3 className="font-semibold text-gray-800 text-sm uppercase mb-4 flex items-center gap-2">
            <ShoppingBag size={18} className="text-pink-300" /> My Orders
          </h3>
          <div className="space-y-3">
            {orders.map((order, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-pink-50 px-4 py-2 rounded-lg hover:bg-pink-100 transition"
              >
                <div>
                  <p className="text-gray-800 font-medium text-sm">{order.item}</p>
                  <p className="text-xs text-gray-500">
                    {order.id} • {order.date}
                  </p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wishlist */}
        <div className="p-6 border-b border-pink-100">
          <h3 className="font-semibold text-gray-800 text-sm uppercase mb-4 flex items-center gap-2">
            <Heart size={18} className="text-pink-300" /> Wishlist
          </h3>
          <div className="text-sm text-gray-600 italic">
            You haven’t added anything yet. Start exploring our collection ❤️
          </div>
        </div>

        {/* Logout */}
        <div className="p-6 flex justify-end">
          <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm transition">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
