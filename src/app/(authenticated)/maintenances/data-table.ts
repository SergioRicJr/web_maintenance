import { Maintenance } from "./columns";

export const maintenances: Maintenance[] = [
    { 
      id: "1", 
      description: "Troca de óleo", 
      requestDate: "2024-08-23", 
      priority: 1, 
      status: "pendente", 
      responsible: "João" 
    },
    { 
      id: "2", 
      description: "Substituição de filtro de ar", 
      requestDate: "2024-08-21", 
      priority: 2, 
      status: "em andamento", 
      responsible: "Maria" 
    },
    { 
      id: "3", 
      description: "Alinhamento de rodas", 
      requestDate: "2024-08-20", 
      priority: 3, 
      status: "concluída", 
      responsible: "Carlos" 
    },
    { 
      id: "4", 
      description: "Revisão de freios", 
      requestDate: "2024-08-18", 
      priority: 1, 
      status: "cancelada", 
      responsible: "Ana" 
    },
    { 
      id: "5", 
      description: "Verificação do sistema elétrico", 
      requestDate: "2024-08-17", 
      priority: 4, 
      status: "concluída", 
      responsible: "Pedro" 
    },
  ];