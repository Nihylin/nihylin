import matplotlib
import matplotlib.pyplot as plt

points = [
    (250, 200),
    (287.5, 362.5),
    (275, 375),
    (275, 525),
    (250, 650),
    (350, 600),
    (500, 375),
    (500, 500),
    (487.5, 512.5),
    (500, 600),
    (600, 650),
    (562.5, 487.5),
    (575, 475),
    (575, 325),
    (600, 200),
    (500, 250),
    (350, 475),
    (350, 350),
    (362.5, 337.5),
    (350, 250)
]

plt.gca().add_patch(plt.Polygon(points, color='#F93822'))
plt.axis('off')
plt.xlim(0, 850)
plt.ylim(0, 850)
plt.gca().set_aspect('equal')
plt.show()
