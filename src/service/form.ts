export const formService = async () => {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};
