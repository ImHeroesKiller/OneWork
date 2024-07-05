import pyautogui
import tkinter as tk

def get_mouse_position():
    x, y = pyautogui.position()
    position_label.config(text=f'Current mouse position: ({x}, {y})')

def click_at_position():
    x = int(entry_x.get())
    y = int(entry_y.get())
    pyautogui.click(x=x, y=y)

def write_text():
    text = entry_text.get()
    pyautogui.write(text, interval=0.25)

# Setup GUI
root = tk.Tk()
root.title("OneWork")

tk.Label(root, text="X:").grid(row=0, column=0)
entry_x = tk.Entry(root)
entry_x.grid(row=0, column=1)

tk.Label(root, text="Y:").grid(row=1, column=0)
entry_y = tk.Entry(root)
entry_y.grid(row=1, column=1)

tk.Label(root, text="Text:").grid(row=2, column=0)
entry_text = tk.Entry(root)
entry_text.grid(row=2, column=1)

tk.Button(root, text="Get Mouse Position", command=get_mouse_position).grid(row=3, column=0, columnspan=2)
tk.Button(root, text="Click at Position", command=click_at_position).grid(row=4, column=0, columnspan=2)
tk.Button(root, text="Write Text", command=write_text).grid(row=5, column=0, columnspan=2)

position_label = tk.Label(root, text="")
position_label.grid(row=6, column=0, columnspan=2)

root.mainloop()
