export const getGroupColors = (group: string): { bg: string; name: string; icon: string; tagBg: string; } => {
  switch (group) {
    case 'Thưởng':         return { bg: 'bg-green-100', name: 'text-green-900',  icon: 'text-green-600',  tagBg: 'bg-green-500' };
    case 'Phạt':           return { bg: 'bg-red-100', name: 'text-red-900',    icon: 'text-red-600',    tagBg: 'bg-red-500' };
    case 'Mua Thẻ':        return { bg: 'bg-blue-100', name: 'text-blue-900', icon: 'text-blue-600', tagBg: 'bg-blue-500' };
    case 'Tấn Công':       return { bg: 'bg-orange-100', name: 'text-orange-900', icon: 'text-orange-600', tagBg: 'bg-orange-500' };
    case 'Đầu Tư':         return { bg: 'bg-yellow-100', name: 'text-yellow-900', icon: 'text-yellow-700', tagBg: 'bg-yellow-600' };
    case 'Cơ Hội':         return { bg: 'bg-purple-100', name: 'text-purple-900', icon: 'text-purple-600',  tagBg: 'bg-purple-500' };
    case 'Quỹ Tri Thức':   return { bg: 'bg-teal-100', name: 'text-teal-900',  icon: 'text-teal-700',  tagBg: 'bg-teal-600' };
    case 'Đặc Biệt':       return { bg: 'bg-gray-200', name: 'text-gray-800',   icon: 'text-gray-600',   tagBg: 'bg-gray-700' };
    default:               return { bg: 'bg-[#f5f5f5]', name: 'text-gray-800',   icon: 'text-gray-600',   tagBg: 'bg-gray-500' };
  }
};