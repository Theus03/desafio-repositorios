import { useState } from "react";
import useActionFormRepos from "../hooks/useFormRepos";

const AddRepository = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    language: "",
    updated_at: "",
    owner: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/repositorios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Repositório salvo com sucesso!");
        setFormData({
          name: "",
          description: "",
          language: "",
          updated_at: "",
          owner: "",
        });
      } else {
        alert("Erro ao salvar repositório.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro de conexão com a API.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Adicionar Repositório</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nome do Repositório"
          value={formData.name}
          onChange={handleChange}
          required
          className="border px-4 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
          required
          className="border px-4 py-2 rounded resize-none"
        />
        <input
          type="text"
          name="language"
          placeholder="Linguagem"
          value={formData.language}
          onChange={handleChange}
          required
          className="border px-4 py-2 rounded"
        />
        <input
          type="date"
          name="updated_at"
          value={formData.updated_at}
          onChange={handleChange}
          required
          className="border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="owner"
          placeholder="Dono do Repositório"
          value={formData.owner}
          onChange={handleChange}
          required
          className="border px-4 py-2 rounded"
        />
        <button
          type="button"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          Salvar
        </button>
        <button
            onClick={() => useActionFormRepos()}
          type="button"
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition"
        >
          Voltar
        </button>
      </form>
    </div>
  );
};

export default AddRepository;
