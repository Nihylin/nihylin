import matplotlib
import matplotlib.pyplot as plt

points = [
    (0, 0),
    (37.5, 162.5),
    (25, 175),
    (25, 325),
    (0, 450),
    (100, 400),
    (250, 175),
    (250, 300),
    (237.5, 312.5),
    (250, 400),
    (350, 450),
    (312.5, 287.5),
    (325, 275),
    (325, 125),
    (350, 0),
    (250, 50),
    (100, 275),
    (100, 150),
    (112.5, 137.5),
    (100, 50)
]

plt.gca().add_patch(plt.Polygon(points))
plt.axis('off')
plt.xlim(0, 350)
plt.ylim(0, 450)
plt.gca().set_aspect('equal')
plt.show()
