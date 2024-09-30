import matplotlib
import matplotlib.pyplot as plt

outer_path = [
    (0.0, 0.0),
    (40.1, 219.2),
    (40.1, 379.7),
    (0.0, 566.0),
    (171.2, 483.9),
    (251.3, 363.8),
    (267.9, 480.0),
    (446.8, 566.0),
    (406.7, 346.8),
    (406.7, 186.3),
    (446.8, 0.0),
    (275.6, 82.1),
    (195.5, 202.2),
    (178.9, 86.0)
]

inner_path = [
    (48.4, 58.0),
    (85.9, 220.5),
    (73.4, 233.0),
    (73.4, 383.0),
    (48.4, 508.0),
    (148.4, 458.0),
    (298.4, 233.0),
    (298.4, 358.0),
    (285.9, 370.5),
    (298.4, 458.0),
    (398.4, 508.0),
    (360.9, 345.5),
    (373.4, 333.0),
    (373.4, 183.0),
    (398.4, 58.0),
    (298.4, 108.0),
    (148.4, 333.0),
    (148.4, 208.0),
    (160.9, 195.5),
    (148.4, 108.0)
]

plt.figure(facecolor='#1F77B4') #default matplotlib color to match inner_path filling as you can't curve out outer_path, delete this line when possible
plt.gca().add_patch(plt.Polygon(outer_path, color='white'))
plt.gca().add_patch(plt.Polygon(inner_path))
plt.axis('off')
plt.xlim(0, 446.8)
plt.ylim(0, 566)
plt.gca().set_aspect('equal')
plt.show()
