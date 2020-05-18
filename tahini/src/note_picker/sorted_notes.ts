import { TrackedNote } from './tracked_note';

export class SortedNotes {
  private sortedNotes: TrackedNote[] = [];

  constructor(notes: TrackedNote[] = []) {
    this.sortedNotes = [...notes].sort((a, b) => a.note.value - b.note.value);
  }

  get length(): number {
    return this.sortedNotes.length;
  }

  reset() {
    this.sortedNotes = [];
  }

  add(note: TrackedNote) {
    let i = this.sortedNotes.length;
    for (; i > 0; i--) {
      if (this.nth(i - 1).note.value <= note.note.value) {
        break;
      }
    }

    this.sortedNotes.splice(i, 0, note);
  }

  bulkAdd(notes: TrackedNote[]) {
    if (!this.sortedNotes.length) {
      this.sortedNotes = [...notes].sort((a, b) => a.note.value - b.note.value);
    } else {
      notes.forEach(n => this.add(n));
    }
  }

  remove(note: TrackedNote) {
    const idx = this.sortedNotes.findIndex(n => n.index === note.index);
    this.sortedNotes.splice(idx, 1);
  }

  each(callback: (note: TrackedNote, i: number) => void) {
    this.sortedNotes.forEach((note, i) => callback(note, i));
  }

  find(callback: (note: TrackedNote, i?: number) => boolean) {
    return this.sortedNotes.find(callback);
  }

  first(count: number): TrackedNote[] {
    return this.sortedNotes.slice(0, count);
  }

  last(count: number): TrackedNote[] {
    return this.sortedNotes.slice(-count);
  }

  nth(idx: number): TrackedNote {
    return this.sortedNotes[idx];
  }

  indexOfValue(value: number, start?: number): number {
    return this.sortedNotes.findIndex((note, i) => (start === undefined || i >= start) && note.note.value === value);
  }

  lastIndexOfValue(value: number): number {
    for (let i = this.sortedNotes.length - 1; i >= 0; i--) {
      if (this.nth(i).note.value === value) {
        return i;
      }
    }
    return -1;
  }
}
