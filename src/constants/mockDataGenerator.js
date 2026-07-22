export const INDIAN_FIRST_NAMES = ["Aarav", "Vihaan", "Aditya", "Arjun", "Sai", "Rahul", "Rohan", "Vikram", "Sanjay", "Anil", "Sunil", "Prakash", "Amit", "Rajesh", "Priya", "Anjali", "Sneha", "Kavita", "Pooja", "Riya", "Neha", "Simran", "Meera", "Swati"];
export const INDIAN_LAST_NAMES = ["Sharma", "Verma", "Reddy", "Patel", "Kumar", "Singh", "Gupta", "Desai", "Joshi", "Iyer", "Nair", "Rao", "Das", "Chowdhury", "Mukherjee", "Sen", "Bose", "Menon", "Pillai", "Chadha", "Malhotra"];
export const CITIES = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Kochi"];

export const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getRandomWeighted = (items, weights) => {
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  let random = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    if (random < weights[i]) return items[i];
    random -= weights[i];
  }
  return items[0];
};

export const generateIndianName = () => `${getRandomItem(INDIAN_FIRST_NAMES)} ${getRandomItem(INDIAN_LAST_NAMES)}`;
export const generatePhone = () => `+91 ${Math.floor(Math.random() * 4 + 6)}${Math.floor(Math.random() * 900000000 + 100000000)}`;

export const generateDateWithinLastMonths = (months) => {
  const date = new Date();
  date.setMonth(date.getMonth() - Math.floor(Math.random() * months));
  date.setDate(date.getDate() - Math.floor(Math.random() * 30));
  return date.toISOString();
};

const NUM_CLIENTS = 120;
const NUM_PROJECTS = 75;
const NUM_INVOICES = 450;
const NUM_PAYMENTS = 600;

export const generateMockData = () => {
  const clients = Array.from({ length: NUM_CLIENTS }, (_, i) => ({
    id: `CLT-${1000 + i}`,
    name: generateIndianName(),
    contactPerson: generateIndianName(),
    phone: generatePhone(),
    email: `client${1000 + i}@example.com`,
    address: `${Math.floor(Math.random() * 100) + 1}, ${getRandomItem(["Main Road", "Gandhi Street", "Koramangala", "Banjara Hills"])}, ${getRandomItem(CITIES)}`,
    gst: `27AAAC${Math.floor(Math.random() * 9000 + 1000)}B1Z${Math.floor(Math.random() * 9)}`,
    pan: `ABCDE${Math.floor(Math.random() * 9000 + 1000)}F`,
    pendingDues: `₹${(Math.random() * 500000).toFixed(2)}`,
    onboardingDate: generateDateWithinLastMonths(24)
  }));

  const projects = Array.from({ length: NUM_PROJECTS }, (_, i) => {
    const client = getRandomItem(clients);
    const budget = Math.floor(Math.random() * 50000000 + 5000000);
    return {
      id: `PRJ-${2000 + i}`,
      clientId: client.id,
      clientName: client.name,
      name: `${client.name.split(' ')[1]}'s ${getRandomItem(["Residence", "Office Setup", "Villa Renovation", "Commercial Complex"])}`,
      status: getRandomWeighted(["Planning", "In Progress", "Completed", "Delayed", "On Hold"], [10, 50, 20, 10, 10]),
      priority: getRandomWeighted(["Low", "Medium", "High", "Urgent"], [20, 50, 20, 10]),
      type: getRandomItem(["Residential", "Commercial", "Interior", "Turnkey", "Villa"]),
      budget: budget,
      spent: Math.floor(budget * (Math.random() * 0.8)),
      progress: Math.floor(Math.random() * 100),
      manager: generateIndianName(),
      engineer: generateIndianName(),
      startDate: generateDateWithinLastMonths(12),
      endDate: generateDateWithinLastMonths(2)
    };
  });

  const invoices = Array.from({ length: NUM_INVOICES }, (_, i) => {
    const project = getRandomItem(projects);
    const amount = Math.floor(Math.random() * 1000000 + 50000);
    const status = getRandomWeighted(["Draft", "Sent", "Partially Paid", "Paid", "Overdue"], [5, 10, 15, 60, 10]);
    return {
      id: `INV-${3000 + i}`,
      projectId: project.id,
      projectName: project.name,
      clientId: project.clientId,
      date: generateDateWithinLastMonths(12),
      dueDate: generateDateWithinLastMonths(10),
      amount: amount,
      status: status,
      type: getRandomItem(["Advance Invoice", "Running Bill", "Stage Payment"])
    };
  });

  const payments = Array.from({ length: NUM_PAYMENTS }, (_, i) => {
    const invoice = getRandomItem(invoices);
    return {
      id: `PAY-${4000 + i}`,
      invoiceId: invoice.id,
      projectId: invoice.projectId,
      clientId: invoice.clientId,
      amount: Math.floor(invoice.amount * (Math.random() * 0.5 + 0.5)),
      date: generateDateWithinLastMonths(10),
      method: getRandomItem(["UPI", "Bank Transfer", "Cheque", "NEFT", "RTGS"]),
      status: getRandomWeighted(["Pending", "Received", "Cleared", "Failed"], [10, 20, 65, 5]),
      type: getRandomItem(["Advance", "Partial", "Stage Payment"])
    };
  });

  // WORKFORCE ENTITIES
  const employees = Array.from({ length: 40 }, (_, i) => ({
    id: `EMP-${1000 + i}`,
    code: `EMP-${1000 + i}`,
    name: generateIndianName(),
    email: `emp${1000 + i}@nirvag.com`,
    phone: generatePhone(),
    department: getRandomItem(["Engineering", "Operations", "Finance", "HR", "Procurement"]),
    designation: getRandomItem(["Project Manager", "Site Engineer", "Supervisor", "Accountant", "Store Manager"]),
    role: getRandomItem(["Admin", "Manager", "Staff"]),
    status: getRandomWeighted(["Active", "On Leave", "Resigned"], [85, 10, 5])
  }));

  const contractors = Array.from({ length: 25 }, (_, i) => ({
    id: `CON-${5000 + i}`,
    name: `${getRandomItem(INDIAN_LAST_NAMES)} Enterprises`,
    contactPerson: generateIndianName(),
    phone: generatePhone(),
    gst: `27AAAC${Math.floor(Math.random() * 9000 + 1000)}B1Z${Math.floor(Math.random() * 9)}`,
    workersSupplied: Math.floor(Math.random() * 50) + 10,
    status: "Active"
  }));

  const workers = Array.from({ length: 300 }, (_, i) => {
    const contractor = getRandomWeighted([null, getRandomItem(contractors)], [20, 80]); // 20% direct, 80% contractor
    const project = getRandomItem(projects);
    return {
      id: `WRK-${6000 + i}`,
      code: `WRK-${6000 + i}`,
      name: generateIndianName(),
      trade: getRandomItem(["Mason", "Carpenter", "Electrician", "Painter", "Plumber", "Welder", "Helper"]),
      skillLevel: getRandomWeighted(["Skilled", "Semi-Skilled", "Unskilled"], [40, 30, 30]),
      dailyWage: Math.floor(Math.random() * 500) + 500,
      contractorId: contractor?.id,
      contractorName: contractor?.name || "Direct Hire",
      currentProjectId: project.id,
      currentProjectName: project.name,
      phone: generatePhone(),
      status: getRandomWeighted(["Active", "Inactive", "On Leave"], [80, 10, 10])
    };
  });

  const boq = [];
  const milestones = [];
  const expenses = [];
  const team = [];
  const materials = [];
  const purchaseOrders = [];

  const dailyLogs = [];
  const labourAttendance = [];
  const workProgress = [];
  const machineryLogs = [];
  const safetyLogs = [];
  const qualityLogs = [];
  const visitors = [];

  projects.forEach(project => {
    const defaultMilestones = ["Foundation", "Basement", "Ground Floor", "Roofing", "Brick Work", "Plastering", "Painting", "Handover"];
    defaultMilestones.forEach(m => {
      milestones.push({
        id: `MIL-${Math.floor(Math.random() * 100000)}`,
        projectId: project.id,
        name: m,
        status: getRandomWeighted(["Pending", "In Progress", "Completed"], [30, 40, 30]),
        progress: Math.floor(Math.random() * 100),
        assignedTo: project.engineer
      });
    });

    for (let i = 0; i < 5; i++) {
      const qty = Math.floor(Math.random() * 1000) + 50;
      const rate = Math.floor(Math.random() * 500) + 50;
      boq.push({
        id: `BOQ-${Math.floor(Math.random() * 100000)}`,
        projectId: project.id,
        category: getRandomItem(["Civil", "Electrical", "Plumbing", "Carpentry"]),
        item: getRandomItem(["Cement Bags", "Steel TMT", "PVC Pipes", "Wiring Roll", "Plywood"]),
        qty: qty,
        unit: getRandomItem(["Nos", "Kg", "Rft", "Sft"]),
        rate: rate,
        estimatedCost: qty * rate,
        actualCost: qty * rate * (Math.random() * 0.2 + 0.9)
      });
    }

    team.push({ id: `TM-${Math.floor(Math.random()*10000)}`, projectId: project.id, name: project.manager, role: "Project Manager", phone: generatePhone() });
    team.push({ id: `TM-${Math.floor(Math.random()*10000)}`, projectId: project.id, name: project.engineer, role: "Site Engineer", phone: generatePhone() });

    for (let i = 0; i < 4; i++) {
      materials.push({
        id: `MAT-${Math.floor(Math.random()*10000)}`,
        projectId: project.id,
        name: getRandomItem(["UltraTech Cement", "Tata Steel", "Asian Paints", "Astral Pipes"]),
        reqQty: 500,
        issuedQty: Math.floor(Math.random() * 300) + 100,
        consumedQty: Math.floor(Math.random() * 200) + 50,
        supplier: getRandomItem(INDIAN_LAST_NAMES) + " Traders"
      });
    }

    for (let i = 0; i < 10; i++) {
      expenses.push({
        id: `EXP-${Math.floor(Math.random()*100000)}`,
        projectId: project.id,
        category: getRandomItem(["Material", "Labour", "Transport", "Machinery", "Food"]),
        amount: Math.floor(Math.random() * 50000) + 1000,
        date: generateDateWithinLastMonths(6),
        status: getRandomWeighted(["Approved", "Pending", "Paid"], [40, 20, 40])
      });
    }
    
    purchaseOrders.push({
      id: `PO-${Math.floor(Math.random()*10000)}`,
      projectId: project.id,
      supplier: getRandomItem(INDIAN_LAST_NAMES) + " Traders",
      status: getRandomWeighted(["Requested", "Approved", "Ordered", "Delivered"], [10, 20, 40, 30]),
      amount: Math.floor(Math.random() * 500000) + 10000
    });

    for (let i = 0; i < 3; i++) {
      dailyLogs.push({
        id: `DL-${Math.floor(Math.random()*10000)}`,
        projectId: project.id,
        date: generateDateWithinLastMonths(1),
        weather: getRandomItem(["Sunny", "Cloudy", "Rainy"]),
        achievements: "Completed western wall. Finished plumbing inside kitchen. Roof reinforcement started.",
        submittedBy: project.engineer
      });
    }

    const trades = ["Mason", "Carpenter", "Electrician", "Painter", "Plumber", "Welder", "Helper"];
    for (let i = 0; i < 10; i++) {
      labourAttendance.push({
        id: `ATT-${Math.floor(Math.random()*100000)}`,
        projectId: project.id,
        employee: generateIndianName(),
        contractor: `${getRandomItem(INDIAN_LAST_NAMES)} Labour Supply`,
        trade: getRandomItem(trades),
        status: getRandomWeighted(["Present", "Absent", "Half Day", "Late"], [70, 10, 10, 10]),
        workingHours: Math.floor(Math.random() * 2) + 7
      });
    }

    const activities = ["Excavation", "PCC", "Column Footing", "Plinth Beam", "Brickwork GF", "Slab Casting"];
    activities.forEach(act => {
      const planned = Math.floor(Math.random() * 1000) + 100;
      const completed = Math.floor(Math.random() * planned);
      workProgress.push({
        id: `WP-${Math.floor(Math.random()*10000)}`,
        projectId: project.id,
        activity: act,
        plannedQty: planned,
        totalCompleted: completed,
        remaining: planned - completed,
        progress: Math.floor((completed/planned)*100),
        status: getRandomItem(["Pending", "Started", "In Progress", "Completed", "Delayed"])
      });
    });

    const machines = ["JCB Excavator", "Concrete Mixer", "Vibrator", "Crane", "Water Tanker"];
    for (let i = 0; i < 3; i++) {
      machineryLogs.push({
        id: `MACH-${Math.floor(Math.random()*10000)}`,
        projectId: project.id,
        machine: getRandomItem(machines),
        operator: generateIndianName(),
        hoursUsed: Math.floor(Math.random() * 12) + 1,
        fuelUsed: Math.floor(Math.random() * 50) + 5,
        condition: getRandomWeighted(["Good", "Requires Maintenance", "Out of Order"], [70, 20, 10])
      });
    }

    safetyLogs.push({
      id: `SAF-${Math.floor(Math.random()*10000)}`,
      projectId: project.id,
      date: generateDateWithinLastMonths(1),
      inspector: project.manager,
      incidents: Math.floor(Math.random() * 2),
      status: getRandomItem(["Passed", "Minor Deficiencies", "Major Risks Found"])
    });

    qualityLogs.push({
      id: `QA-${Math.floor(Math.random()*10000)}`,
      projectId: project.id,
      date: generateDateWithinLastMonths(1),
      inspector: project.engineer,
      area: getRandomItem(["Foundation", "Ground Floor Roof", "Kitchen Plumbing"]),
      status: getRandomItem(["Passed", "Minor Defects", "Major Defects", "Rejected"])
    });

    for(let i=0; i<3; i++) {
      visitors.push({
        id: `VIS-${Math.floor(Math.random()*10000)}`,
        projectId: project.id,
        name: generateIndianName(),
        company: `${getRandomItem(INDIAN_LAST_NAMES)} Suppliers`,
        purpose: getRandomItem(["Material Delivery", "Site Inspection", "Client Visit"]),
        checkIn: "09:30 AM",
        checkOut: "11:45 AM"
      });
    }
  });

  const labourPayments = [];
  workers.forEach(w => {
    // Generate 2 past payments per worker
    for(let i=0; i<2; i++) {
      const presentDays = Math.floor(Math.random() * 6) + 1;
      const otHours = Math.floor(Math.random() * 10);
      const otRate = Math.floor(w.dailyWage / 8) * 1.5;
      const gross = (presentDays * w.dailyWage) + (otHours * otRate);
      const advanceDeducted = Math.floor(Math.random() * 500);
      labourPayments.push({
        id: `PAYL-${Math.floor(Math.random()*100000)}`,
        workerId: w.id,
        workerName: w.name,
        trade: w.trade,
        contractor: w.contractorName,
        period: i === 0 ? "Week 1 (Current Month)" : "Week 4 (Last Month)",
        presentDays,
        otHours,
        gross: Math.floor(gross),
        advanceDeducted,
        netPayable: Math.floor(gross - advanceDeducted),
        status: getRandomWeighted(["Pending", "Approved", "Paid"], [20, 30, 50])
      });
    }
  });

  return { 
    clients, projects, invoices, payments, boq, milestones, expenses, team, 
    materials, purchaseOrders, dailyLogs, labourAttendance, workProgress, 
    machineryLogs, safetyLogs, qualityLogs, visitors,
    employees, contractors, workers, labourPayments
  };
};

export const MOCK_DB = generateMockData();
