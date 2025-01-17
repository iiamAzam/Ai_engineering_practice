import express from 'express'
import notemodel from '../../schemas/notesmidel.js'
const route = express.Router()
route.post('/notes', async (req, res) => {
    try {
      const { title, content } = req.body;
      const note = new notemodel({ title, content });
      await note.save();
      res.status(201).json(note);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create note' });
    }
  });
  
  
  route.get('/notes', async (req, res) => {
    try {
      const notes = await notemodel.find();
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch notes' });
    }
  });
  
   route.get('/notes/:id', async (req, res) => {
    try {
      const note = await notemodel.findById(req.params.id);
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch note' });
    }
  });
  
  
  route.put('/notes/:id', async (req, res) => {
    try {
      const { title, content } = req.body;
      const note = await notemodel.findByIdAndUpdate(
        req.params.id,
        { title, content, updatedAt: Date.now() },
        { new: true }
      );
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update note' });
    }
  });
  
    route.delete('/notes/:id', async (req, res) => {
    try {
      const note = await notemodel.findByIdAndDelete(req.params.id);
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
      res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete note' });
    }
  });
  
  export const router =  route