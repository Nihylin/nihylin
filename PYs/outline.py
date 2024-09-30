import matplotlib
import matplotlib.pyplot as plt

outer_path = [
    (259.6, 200),
    (299.7, 419.2),
    (299.7, 579.7),
    (259.6, 766),
    (430.8, 683.9),
    (510.9, 563.8),
    (527.5, 680),
    (706.4, 766),
    (666.3, 546.8),
    (666.3, 386.3),
    (706.4, 200),
    (535.2, 282.1),
    (455.1, 402.2),
    (438.5, 286)
]

inner_path = [
    (308, 258),
    (345.5, 420.5),
    (333, 433),
    (333, 583),
    (308, 708),
    (408, 658),
    (558, 433),
    (558, 558),
    (545.5, 570.5),
    (558, 658),
    (658, 708),
    (620.5, 545.5),
    (633, 533),
    (633, 383),
    (658, 258),
    (558, 308),
    (408, 533),
    (408, 408),
    (420.5, 395.5),
    (408, 308),
]

plt.figure(facecolor='#101820')
plt.gca().add_patch(plt.Polygon(outer_path, color='white'))
plt.gca().add_patch(plt.Polygon(inner_path, color='#101820'))
plt.axis('off')
plt.xlim(0, 966)
plt.ylim(0, 966)
plt.gca().set_aspect('equal')
plt.show()
