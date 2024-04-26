const Employee = require('../models/Employee');
let employees = []; // Sample in-memory data store

// Create an employee
const createEmployee = (req, res) => {
  const { name, position, department } = req.body;
  const newEmployee = new Employee(employees.length + 1, name, position, department);
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

// Get all employees
const getEmployees = (req, res) => {
  res.json(employees);
};

// Get employee by ID
const getEmployeeById = (req, res) => {
  const employeeId = parseInt(req.params.id);
  const employee = employees.find(emp => emp.id === employeeId);
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  res.json(employee);
};

// Update employee by ID
const updateEmployeeById = (req, res) => {
  const employeeId = parseInt(req.params.id);
  const { name, position, department } = req.body;
  let employee = employees.find(emp => emp.id === employeeId);
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }
  employee.name = name || employee.name;
  employee.position = position || employee.position;
  employee.department = department || employee.department;
  res.json(employee);
};

// Delete employee by ID
const deleteEmployeeById = (req, res) => {
  const employeeId = parseInt(req.params.id);
  employees = employees.filter(emp => emp.id !== employeeId);
  res.status(204).send();
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById
};
