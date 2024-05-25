const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const prisma = require("../prisma");

// Get all tickets
router.get("/", auth, async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany();
    res.json(tickets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Create a ticket
router.post("/", auth, async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const newTicket = await prisma.ticket.create({
      data: { title, description, status, userId: req.user.id },
    });
    res.json(newTicket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get a single ticket
router.get("/:id", auth, async (req, res) => {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!ticket) {
      return res.status(404).json({ msg: "Ticket not found" });
    }

    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Update a ticket
router.put("/:id", auth, async (req, res) => {
  const { title, description, status } = req.body;

  try {
    let ticket = await prisma.ticket.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!ticket) {
      return res.status(404).json({ msg: "Ticket not found" });
    }

    ticket = await prisma.ticket.update({
      where: { id: Number(req.params.id) },
      data: { title, description, status },
    });

    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete a ticket
router.delete("/:id", auth, async (req, res) => {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!ticket) {
      return res.status(404).json({ msg: "Ticket not found" });
    }

    await prisma.ticket.delete({ where: { id: Number(req.params.id) } });
    res.json({ msg: "Ticket removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
