// hooks/useProductSearch.ts
import { useQuery } from "@tanstack/react-query";

export const useProductSearch = (query: string, enabled = true) => {
  return useQuery({
    queryKey: ["products", query],
    queryFn: async () => {
      const res = await fetch(`/api/products?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      return data.products;
    },
    enabled: enabled && !!query, // avoids running on empty
    staleTime: 5 * 60 * 1000, // optional: 5 minutes
  });
};
